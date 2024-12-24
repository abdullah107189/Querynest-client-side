import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import { format } from "date-fns";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateQuery = () => {
    const { user } = useContext(AuthContext)
    const [queryData, setQueryData] = useState([])
    const { id } = useParams()
    // const date = format(new Date(), 'P')
    useEffect(() => {
        axios.get(`http://localhost:4545/querie-details/${id}`)
            .then(res => {
                setQueryData(res.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [])

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const formEntriesData = Object.fromEntries(form.entries())

        axios.patch(`http://localhost:4545/query-update/${id}`, formEntriesData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success('Querie update success ')
                    e.target.reset()
                    navigate('/my-queries')
                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className="my-10 border p-4 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-800 text-md mb-1">
                        Product Name
                    </label>
                    <input
                        defaultValue={queryData?.product_name}
                        type="text"
                        name="product_name"
                        className="w-full px-4 py-2 rounded-md focus:outline-none border"
                        placeholder="Enter your  product name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-800 text-md mb-1">
                        Product Brand
                    </label>
                    <input
                        defaultValue={queryData?.product_brand}
                        type="text"
                        name="product_brand"
                        className="w-full px-4 py-2 rounded-md focus:outline-none border"
                        placeholder="Enter your product brand"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="photoUrl" className="block text-gray-800 text-md mb-1">
                        Product Url
                    </label>
                    <input
                        id="photoUrl"
                        defaultValue={queryData?.product_url}
                        type="url"
                        name="product_url"
                        className="w-full px-4 py-2 rounded-md focus:outline-none border"
                        placeholder="Enter your product Url"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="query_title" className="block text-gray-800 text-md mb-1">
                        Query TItle
                    </label>
                    <input
                        defaultValue={queryData?.query_title}
                        id="query_title"
                        type="text"
                        name="query_title"
                        className="w-full px-4 py-2 rounded-md focus:outline-none border"
                        placeholder="exp: Is there any Better product that gives me the same quality?"
                    />
                </div>

                <div className="md:col-span-2">
                    <label htmlFor="name" className="block text-gray-800 text-md mb-1">
                        Boycotting Reason Details
                    </label>
                    <textarea defaultValue={queryData?.boycotting_reason} className="w-full border p-2 rounded-lg focus:outline-none mb-2 max-h-24" name="boycotting_reason" placeholder="the reason you don’t want this product"></textarea>
                </div>

                <button className="w-1/2 md:col-span-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mx-auto">
                    Update Query
                </button>
            </form>
        </div>
    );
};

export default UpdateQuery;