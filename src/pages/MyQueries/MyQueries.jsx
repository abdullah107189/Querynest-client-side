import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgMenuGridR } from "react-icons/cg";
import Swal from "sweetalert2";
import { format } from "date-fns";
const MyQueries = () => {
    const { user } = useContext(AuthContext)
    const [queries, setQueries] = useState([])
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:4545/my-queries?email=${user?.email}`)
                .then(res => {
                    setQueries(res.data)
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
                axios.delete(`http://localhost:4545/my-querie/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            axios.get(`http://localhost:4545/my-queries?email=${user?.email}`)
                                .then(res => {
                                    setQueries(res.data)
                                })
                        }
                    })

            }
        });

    }
    return (
        <div>
            <div className="flex items-center justify-end gap-5 px-4 mt-5 ">
                <h1 className="text-2xl font-bold">Show card as you want </h1>
                <div className="flex gap-2">
                    <button onClick={() => setToggle(false)}><CgMenuGridR className={`w-8 h-8 ${toggle ? 'text-gray-400 ' : ''}`} /></button>
                    <button onClick={() => setToggle(true)}><TfiMenuAlt className={`w-8 h-8 ${toggle ? '' : 'text-gray-400 '}`} /></button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {queries.map(query => (
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
                            <p className="mb-2">RecommendationCount : {query.recommendationCount}</p>
                            <div className="flex items-center justify-center gap-2">
                                <Link to={`/querie-details/${query?._id}`} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                                    View Details
                                </Link>
                                <Link to={`/queries/${query._id}`} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                                    Update
                                </Link>
                                <button onClick={() => handleDeleteQueries(query._id)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyQueries;