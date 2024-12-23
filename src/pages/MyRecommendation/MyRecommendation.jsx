import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from 'axios'
import Swal from "sweetalert2";
const MyRecommendation = () => {
    const { user } = useContext(AuthContext)
    const [myRecommendation, setMyRecommendtaion] = useState([])
    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:4545/my-recommendation/${user?.email}`)
                .then(res => {
                    setMyRecommendtaion(res.data)
                })
        }
    }, [])
    const handleDelete = (id, queryId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:4545/my-recommendation/${id}?queryId=${queryId}`,)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            axios.get(`http://localhost:4545/my-recommendation/${user?.email}`)
                                .then(res => {
                                    setMyRecommendtaion(res.data)
                                })
                        }
                    })
            }
        });
    }
    return (
        <div className="minHF">
            <h1 className="text-2xl font-bold mb-4">My Recommendations</h1>
            <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Product Author</th>
                            <th className="border px-4 py-2">Title</th>
                            <th className="border px-4 py-2">Product Name</th>
                            <th className="border px-4 py-2">Recommend Product Image</th>
                            <th className="border px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myRecommendation.map((rec, index) => (
                            <tr key={index}>
                                <td className="border">{rec.userEmail}</td>
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
    );
};

export default MyRecommendation;