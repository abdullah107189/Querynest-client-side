import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { format } from "date-fns";

const AddQueries = () => {
    const { user } = useContext(AuthContext)
    const date = format(new Date(), 'P')

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const formEntriesData = Object.fromEntries(form.entries())
        formEntriesData.authorName = user?.displayName
        formEntriesData.authorPhotoURL = user?.photoURL
        formEntriesData.authorEmail = user?.email
        formEntriesData.uploadDate = date
        formEntriesData.recommendationCount = 0
    }
    return (
        <div className="my-10 border p-4 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-800 text-md mb-1">
                        Product Name
                    </label>
                    <input
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
                        type="text"
                        name="product_brand"
                        className="w-full px-4 py-2 rounded-md focus:outline-none border"
                        placeholder="Enter your product brand"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-800 text-md mb-1">
                        Product Url
                    </label>
                    <input
                        type="url"
                        name="product_url"
                        className="w-full px-4 py-2 rounded-md focus:outline-none border"
                        placeholder="Enter your product Url"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="photoUrl" className="block text-gray-800 text-md mb-1">
                        Query TItle
                    </label>
                    <input
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
                    <textarea className="w-full border p-2 rounded-lg focus:outline-none mb-2 max-h-24" name="boycotting_reason" placeholder="the reason you don’t want this product"></textarea>
                </div>

                <button className="w-1/2 md:col-span-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mx-auto">
                    Add Querie
                </button>
            </form>
        </div>
    );
};

export default AddQueries;