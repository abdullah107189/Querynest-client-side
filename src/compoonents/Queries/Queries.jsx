import { useEffect, useState } from "react"
import axios from "axios"
import { format } from "date-fns";
import { Link } from "react-router-dom";

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