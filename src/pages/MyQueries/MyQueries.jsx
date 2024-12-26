import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, } from "react-router-dom";
import Swal from "sweetalert2";
import { format } from "date-fns";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const MyQueries = () => {
    const { user } = useContext(AuthContext)
    const [queries, setQueries] = useState([])
    const [fetchLoading, setFetchLoading] = useState(false)
    const axiosInstance = useAxiosSecure()
    useEffect(() => {
        if (user) {
            setFetchLoading(true)
            axiosInstance.get(`/my-queries?email=${user?.email}`)
                .then(res => {
                    setQueries(res.data);
                    setFetchLoading(false)
                })
                .catch(err => {
                    if (err) {
                        setFetchLoading(false)
                    }
                })

        }
    }, [user])

    const handleDeleteQueries = (id) => {
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
                axiosInstance.delete(`/my-querie/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            axiosInstance.get(`/my-queries?email=${user?.email}`)
                                .then(res => {
                                    setQueries(res.data);
                                    setFetchLoading(false)
                                })
                                .catch(err => {
                                    if (err) {
                                        setFetchLoading(false)
                                    }
                                })
                        }
                    })

            }
        });
    }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    fetchLoading ?
                        Array.from({ length: 3 }).map((_, idx) => (
                            <div key={idx} className="relative border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition ">
                                <div className="px-3 rounded-md bg-blue-100/60 text-blue-500 font-semibold top-1 left-1 absolute flex flex-col">
                                    <span className="h-4 w-16 bg-blue-300 animate-pulse rounded-md mb-2"></span>
                                    <span className="h-4 w-12 bg-blue-300 animate-pulse rounded-md"></span>
                                </div>

                                <div className="w-full h-[200px] bg-gray-200 animate-pulse"></div>

                                <div className="p-4 text-center">
                                    <div className="h-6 w-3/4 bg-gray-300 animate-pulse rounded-md mb-3 mx-auto"></div>
                                    <div className="h-4 w-5/6 bg-gray-300 animate-pulse rounded-md mb-3 mx-auto"></div>
                                    <div className="h-4 w-1/2 bg-gray-300 animate-pulse rounded-md mb-4 mx-auto"></div>
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="h-10 w-24 bg-blue-300 animate-pulse rounded-md"></div>
                                        <div className="h-10 w-24 bg-blue-300 animate-pulse rounded-md"></div>
                                        <div className="h-10 w-24 bg-blue-300 animate-pulse rounded-md"></div>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        queries.length === 0 ?
                            <div className="flex items-center justify-center md:gap-10 gap-5 flex-col minHF bg-slate-100 p-10 w-full lg:col-span-3 md:col-span-2 col-span-1">
                                <p className="text-2xl text-center font-bold">There are no queries found</p>
                                <Link
                                    to={'/add-queries'}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg"
                                >
                                    Add Queries
                                </Link>
                            </div>
                            :
                            queries?.map(query => (
                                <div
                                    key={query._id}
                                    className="relative border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition"
                                >
                                    <div className="px-3 rounded-md bg-blue-100/60 text-blue-500 font-semibold top-1 left-1 absolute flex flex-col"><span>{format(new Date(query.uploadDate), "P")}</span> <span>{format(new Date(query.uploadDate), "p")}</span></div>
                                    <img
                                        src={query.product_url}
                                        alt={query.product_name}
                                        className="w-full h-[200px] object-contain"
                                    />
                                    <div className="p-4 text-center">
                                        <h2 className="text-lg font-bold">{query.product_name}</h2>
                                        <p className="text-sm mb-3 text-gray-600">{query.query_title.substring(0, 50)}...</p>
                                        <p className="mb-2 font-bold">RecommendationCount : {query.recommendationCount}</p>
                                        <div className="flex items-center justify-center gap-2">
                                            <Link to={`/querie-details/${query?._id}`} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                                                View Details
                                            </Link>
                                            <Link to={`/update-query/${query._id}`} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                                                Update
                                            </Link>
                                            <button onClick={() => handleDeleteQueries(query._id)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                }
            </div>
        </div>
    );
};

export default MyQueries;