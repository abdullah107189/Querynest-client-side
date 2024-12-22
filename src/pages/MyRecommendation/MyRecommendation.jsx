import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from 'axios'
const MyRecommendation = () => {
    const { user } = useContext(AuthContext)
    const [myRecommendation, setMyRecommendtaion] = useState([])
    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:4545/my-recommendation/${user?.email}`)
                .then(res => {
                    setMyRecommendtaion(res.data)
                })
                .catch(err => console.error(err));
        }
    }, [])
    const handleDelete = (id) => {
        console.log(id);
    }
    return (
        <div>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">My Recommendations</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">Title</th>
                                <th className="border px-4 py-2">Product Name</th>
                                <th className="border px-4 py-2">Image</th>
                                <th className="border px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myRecommendation.map((rec, index) => (
                                <tr key={index}>
                                    <td className="border">{rec.recommendationTitle}</td>
                                    <td className="border">{rec.recommendedProductName}</td>
                                    <td className="border">
                                        <img src={rec.recommendedProductImage} alt={rec.recommendedProductName} className="min-w-20 h-20 mx-auto object-cover rounded" />
                                    </td>
                                    <td className="border">
                                        <div className="flex items-center justify-center">
                                            <button
                                                onClick={() => handleDelete(rec._id, rec.queryId)}
                                                className="bg-red-400 hover:bg-red-500 text-white px-5 py-2 rounded-lg"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyRecommendation;