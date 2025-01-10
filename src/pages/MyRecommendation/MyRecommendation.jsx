import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from 'axios'
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const MyRecommendation = () => {
    const { user } = useContext(AuthContext)
    const [myRecommendation, setMyRecommendtaion] = useState([])
    const axiosInstance = useAxiosSecure()
    const [fetchLoding, setFetchLoading] = useState(false)
    useEffect(() => {
        if (user?.email) {
            setFetchLoading(true)
            axiosInstance.get(`/my-recommendation/${user.email}`)
                .then(res => {
                    setMyRecommendtaion(res.data);
                    setFetchLoading(false)
                })
                .catch(err => {
                    if (err) {
                        setFetchLoading(false)
                    }
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
                axios.delete(`https://b10a11-server-side-abdullah107189.vercel.app/my-recommendation/${id}?queryId=${queryId}`,)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            axios.get(`https://b10a11-server-side-abdullah107189.vercel.app/my-recommendation/${user?.email}`)
                                .then(res => {
                                    setMyRecommendtaion(res.data)
                                })
                        }
                    })
            }
        });
    }
    return (
        <div className="minHF mxw ">
            <h1 className="text-2xl px-4 font-bold mb-4">My Recommendations</h1>
            <div className="overflow-x-auto my-10 px-4">
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
                    {
                        fetchLoding ?
                            <tbody>
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <tr key={index}>
                                        <td className="border">
                                            <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded-md mx-auto"></div>
                                        </td>
                                        <td className="border">
                                            <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded-md mx-auto"></div>
                                        </td>
                                        <td className="border">
                                            <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded-md mx-auto"></div>
                                        </td>
                                        <td className="border">
                                            <div className="w-20 h-20 bg-gray-200 animate-pulse rounded mx-auto"></div>
                                        </td>
                                        <td className="border">
                                            <div className="flex items-center justify-center">
                                                <div className="h-10 w-24 bg-red-300 animate-pulse rounded-md"></div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                            :
                            myRecommendation.length === 0 ?
                                <tbody>
                                    <tr className="text-center">
                                        <td className="border text-3xl font-bold" colSpan={5}>There is no recommendation data</td>
                                    </tr>
                                </tbody>
                                :
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
                    }

                </table>
            </div>
        </div>
    );
};

export default MyRecommendation;