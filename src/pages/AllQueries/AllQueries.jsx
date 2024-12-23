import { useEffect, useState } from "react"
import axios from "axios"
import { format } from "date-fns";
import { Link } from "react-router-dom";

const AllQueries = () => {
    const [queries, setQueries] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4545/all-queries`)
            .then(res => {
                setQueries(res.data)
            })
    }, [])

    return (
        <div className="my-10">
            <h1 className="md:text-4xl text-2xl font-bold text-center mb-3">Recent Added Queries</h1>
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
                            <p className="mb-4">RecommendationCount : {query.recommendationCount}</p>
                            <Link className="px-5 py-2 rounded-lg border bg-gray-100 hover:bg-gray-200" to={`/querie-details/${query?._id}`}>Do Recommend</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllQueries;