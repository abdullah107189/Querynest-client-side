import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
const MyQueries = () => {
    const { user } = useContext(AuthContext)
    const [queries, setQueries] = useState([])
    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:4545/my-queries?email=${user?.email}`)
                .then(res => {
                    setQueries(res.data)
                })
        }
    }, [user])
    console.log(queries);
    return (
        <div>
            <div className="">
                <h1>Show card as you want </h1>
                <div>
                    
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {queries.map(query => (
                    <div
                        key={query._id}
                        className="border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition"
                    >
                        <img
                            src={query.product_url}
                            alt={query.product_name}
                            className="w-full h-[200px] object-contain"
                        />
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-bold">{query.product_name}</h2>
                            <p className="text-sm mb-3 text-gray-600">{query.query_title.substring(0, 50)}...</p>

                            <div className="flex items-center justify-center gap-2">
                                <Link to={`/queries/${query._id}`} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                                    View Details
                                </Link>
                                <Link to={`/queries/${query._id}`} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                                    Update
                                </Link>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
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