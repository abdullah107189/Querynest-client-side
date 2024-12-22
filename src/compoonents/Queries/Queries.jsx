import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import axios from "axios"
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Queries = () => {
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

    return (
        <div className="my-10">
            <h1 className="md:text-4xl text-2xl font-bold text-center mb-3">Recent Queries</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {queries.map(query => (
                    <Link to={`/querie-details/${query?._id}`}
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
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Queries;