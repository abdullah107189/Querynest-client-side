import { useEffect, useState } from "react"
import axios from "axios"
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgMenuGridR } from "react-icons/cg";

const AllQueries = () => {
    const [queries, setQueries] = useState([])
    const [toggle, setToggle] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    useEffect(() => {
        axios.get(`https://query-nest-server-side.vercel.app/all-queries?search=${searchValue}`)
            .then(res => {
                setQueries(res.data)
            })
    }, [searchValue])

    return (
        <div className="my-10">
            {/* search field */}
            <div className="flex items-center justify-center">
                <input
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="relative border rounded-full focus:w-3/5 transform duration-300 focus:outline-none focus:shadow-lg focus:border-0 px-5 p-2 md:w-1/2" type="search" placeholder="Search Query" name="" id="" />
            </div>
            <div className="flex items-center justify-end gap-5 px-4 mt-5 ">
                <h1 className="text-2xl font-bold">Show card as you want </h1>
                <div className="flex gap-2">
                    <button onClick={() => setToggle(true)}><CgMenuGridR className={`w-8 h-8 ${toggle ? '' : 'text-gray-400 '}`} /></button>
                    <button onClick={() => setToggle(false)}><TfiMenuAlt className={`w-8 h-8 ${toggle ? 'text-gray-400 ' : ''}`} /></button>
                </div>
            </div>
            <div className={`grid grid-cols-1 ${toggle ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-4 p-4`}>
                {queries.map(query => (
                    <div
                        key={query._id}
                        className={`relative ${toggle || 'flex justify-between items-center'} border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition`}
                    >
                        <div className={`px-3 rounded-md ${toggle && 'bg-blue-100/60 text-blue-500'} font-semibold top-1 left-1 absolute ${toggle ? 'flex flex-col' : ''}`}>
                            <span className={`${toggle || 'bg-blue-100/60 text-blue-500 badge'}`}>{format(new Date(query.uploadDate), "P")}</span>
                            <span className={`${toggle || 'bg-blue-100/60 text-blue-500 badge'}`}>{format(new Date(query.uploadDate), "p")}</span>
                        </div>
                        <div className={`${toggle || 'md:w-1/2'}`}>
                            <img
                                src={query.product_url}
                                alt={query.product_name}
                                className="w-full h-[200px] object-contain"
                            />
                        </div>
                        <div className={`${toggle ? 'text-center' : 'md:w-1/2 items-start'} p-4 `}>
                            <h2 className="text-lg font-bold">{query.product_name}</h2>
                            <p className="text-sm mb-3 text-gray-600">{toggle ? query.query_title.substring(0, 50) : query.query_title} <span className={`${query.query_title.length > 50 && toggle || 'hidden'}`}>...</span></p>
                            <p className="mb-4 font-bold">RecommendationCount : {query.recommendationCount}</p>
                            <Link className="px-5 py-2 rounded-lg border bg-gray-100 hover:bg-gray-200" to={`/querie-details/${query?._id}`}>Do Recommend</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllQueries;