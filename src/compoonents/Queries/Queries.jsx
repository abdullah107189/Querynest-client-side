import { useEffect, useState } from "react"
import axios from "axios"
import { format } from "date-fns";
import { Link } from "react-router-dom";
import LoadingBar from "../LoadingBar/LoadingBar";

const Queries = () => {
    const [queries, setQueries] = useState([])
    const [fetchLoading, setFetchLoading] = useState(false)
    useEffect(() => {
        setFetchLoading(true)
        axios.get(`https://query-nest-server-side.vercel.app/all-queries?limit=6`)
            .then(res => {
                setQueries(res.data)
                setFetchLoading(false)
            })
    }, [])

    return (
        <div className="my-20">
            <h1 className="md:text-4xl text-2xl font-bold text-center mb-5">Recent Added Queries</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    fetchLoading === true ?
                        <LoadingBar></LoadingBar>
                        :
                        queries.map(query => (
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
                                    <p className="mb-4 font-bold">RecommendationCount : {query.recommendationCount}</p>
                                    <Link className="px-5 py-2 rounded-lg border bg-gray-100 hover:bg-gray-200" to={`/querie-details/${query?._id}`}>Do Recommend</Link>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    );
};

export default Queries;