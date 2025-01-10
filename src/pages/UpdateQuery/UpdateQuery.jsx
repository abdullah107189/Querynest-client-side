import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateQuery = () => {
    const [queryData, setQueryData] = useState([])
    const { id } = useParams()
    const axiosInstance = useAxiosSecure()

    useEffect(() => {
        axiosInstance.get(`/querie-details/${id}`)
            .then(res => {
                setQueryData(res.data)
            })
    }, [])

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const formEntriesData = Object.fromEntries(form.entries())

        axiosInstance.patch(`/query-update/${id}`, formEntriesData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success('Querie update success ')
                    e.target.reset()
                    navigate('/my-queries')
                }
            })
    }
    return (
        <div className="mxw mxw px-4">
            <div className="my-10  dark:dark:border-gray-700 border-gray-700 dark:border-gray-700 border p-4 rounded-xl shadow-lg">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="mb-4">
                        <label htmlFor="name" className="block textP text-md mb-1">
                            Product Name
                        </label>
                        <input
                            defaultValue={queryData?.product_name}
                            type="text"
                            name="product_name"
                            className="w-full px-4 py-2 rounded-md focus:outline-none dark:dark:border-gray-700 border-gray-700 dark:border-gray-700 border"
                            placeholder="Enter your  product name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block textP text-md mb-1">
                            Product Brand
                        </label>
                        <input
                            defaultValue={queryData?.product_brand}
                            type="text"
                            name="product_brand"
                            className="w-full px-4 py-2 rounded-md focus:outline-none dark:border-gray-700 border"
                            placeholder="Enter your product brand"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="photoUrl" className="block textP text-md mb-1">
                            Product Url
                        </label>
                        <input
                            id="photoUrl"
                            defaultValue={queryData?.product_url}
                            type="url"
                            name="product_url"
                            className="w-full px-4 py-2 rounded-md focus:outline-none dark:border-gray-700 border"
                            placeholder="Enter your product Url"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="query_title" className="block textP text-md mb-1">
                            Query TItle
                        </label>
                        <input
                            defaultValue={queryData?.query_title}
                            id="query_title"
                            type="text"
                            name="query_title"
                            className="w-full px-4 py-2 rounded-md focus:outline-none dark:border-gray-700 border"
                            placeholder="exp: Is there any Better product that gives me the same quality?"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label htmlFor="name" className="block textP text-md mb-1">
                            Boycotting Reason Details
                        </label>
                        <textarea defaultValue={queryData?.boycotting_reason} className="w-full dark:border-gray-700 border p-2 rounded-lg focus:outline-none mb-2 max-h-24" name="boycotting_reason" placeholder="the reason you don’t want this product"></textarea>
                    </div>

                    <button className="w-1/2 md:col-span-2 actionBtn mx-auto">
                        Update Query
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateQuery;