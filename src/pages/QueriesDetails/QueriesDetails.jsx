import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const QueryDetails = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const [queryData, setQueryData] = useState([])
    const [allRecommendation, setAllRecommendation] = useState([])
    const axiosInstance = useAxiosSecure()
    useEffect(() => {
        axiosInstance.get(`/querie-details/${id}`)
            .then(res => {
                setQueryData(res.data)
            })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const date = new Date()
        const formData = new FormData(e.target)
        const form = Object.fromEntries(formData.entries())
        form.queryId = queryData._id
        form.QueryTitle = queryData.query_title
        form.productName = queryData.product_name
        form.userEmail = queryData.authorEmail
        form.userName = queryData.authorName
        form.recommenderEmail = user?.email
        form.recommenderName = user?.displayName
        form.recommendTime = date
        axiosInstance.post('https://b10a11-server-side-abdullah107189.vercel.app/add-recommendations', form)
            .then(async (res) => {
                if (res.data.insertedId) {
                    toast.success('Recommendation added successfully done !')

                    const { data } = await axios.get(`https://b10a11-server-side-abdullah107189.vercel.app/allRecommendation/${id}`)
                    setAllRecommendation(data)
                    e.target.reset()
                }
            })

    };

    useEffect(() => {
        axios.get(`https://b10a11-server-side-abdullah107189.vercel.app/allRecommendation/${id}`)
            .then(res => {
                setAllRecommendation(res.data)
            })
    }, [id])
    return (
        <div className="">
            <div className="minH flex items-center justify-center">
                <div className="container mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Query Information */}
                    <div className="bgS shadow-md rounded-lg p-5 dark:border-gray-700 border">
                        <h1 className="text-2xl font-bold textP">{queryData?.query_title}</h1>
                        <p className="mt-3 textS">{queryData?.boycotting_reason}</p>
                        <div className="mt-5">
                            <h2 className="font-semibold text-lg textP">Product Name:</h2>
                            <p className="textS">{queryData?.product_name}</p>
                            <h2 className="font-semibold text-lg textP mt-3">Product Brand:</h2>
                            <p className="textS">{queryData?.product_brand}</p>
                        </div>
                        <div className="mt-5 flex items-center">
                            <img
                                referrerPolicy='no-referrer'
                                src={queryData?.product_url}
                                alt={queryData?.product_name}
                                className="w-52 h-52 object-cover rounded-lg dark:border-gray-700 border"
                            />
                        </div>
                        <div className="mt-5">
                            <p className="text-sm dark:text-gray-400 text-gray-500">
                                Query by: {queryData?.authorName} ({queryData?.authorEmail})
                            </p>
                        </div>
                    </div>

                    {/* Recommendation Form */}
                    <div className="bgS shadow-md rounded-lg p-5 dark:border-gray-700 border">
                        <h2 className="md:text-4xl text-2xl text-center font-semibold textP mb-4">Add a Recommendation</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium textP">Recommendation Title</label>
                                <input
                                    type="text"
                                    name="recommendationTitle"
                                    className="mt-1 block w-full rounded-md p-3 dark:border-gray-700 border shadow-sm focus:outline-none sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium textP">Recommended Product Name</label>
                                <input
                                    type="text"
                                    name="recommendedProductName"
                                    className="mt-1 block w-full rounded-md p-3 dark:border-gray-700 border shadow-sm focus:outline-none sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium textP">Recommended Product Image URL</label>
                                <input
                                    type="url"
                                    required
                                    name="recommendedProductImage"
                                    className="mt-1 block w-full rounded-md p-3 dark:border-gray-700 border shadow-sm focus:outline-none sm:text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium textP">Reason for Recommendation</label>
                                <textarea
                                    name="recommendationReason"
                                    className="mt-1 block max-h-32 w-full rounded-md p-3 dark:border-gray-700 border shadow-sm focus:outline-none sm:text-sm"
                                    rows="3"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className={`${user || 'btn-disabled bg-gray-400 disabled:cursor-not-allowed'} w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md`}
                            >
                                Add Recommendation
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* All Recommendations */}
            < div className="bgS shadow-md rounded-lg p-5 mb-5" >
                <h2 className="text-xl font-semibold textP mb-4">All Recommendations</h2>
                <div className="space-y-4 Z">
                    {allRecommendation.map((rec, idx) => (
                        <div key={idx} className="p-4 dark:border-gray-700 border-2 bgS  rounded-lg md:flex justify-between gap-3 items-center" id={`${idx + 1}`}>
                            <div className='w-full'>
                                <h3 className="font-semibold text-lg">{rec.recommendationTitle}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Recommended by: {rec.recommenderName}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Recommended Time: {format(new Date(rec.recommendTime), 'P')}</p>

                            </div>
                            <div className='w-full'>
                                <p className="mt-2 px-3 ">{rec.recommendationReason}</p>
                            </div>
                            <div className="w-full flex items-center justify-center">
                                {rec.recommendedProductImage && (
                                    <img
                                        src={rec.recommendedProductImage}
                                        alt={rec.recommendedProductName}
                                        className="mt-3 max-w-32 max-h-32 object-cover rounded-lg"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </div>
    );
};

export default QueryDetails;
