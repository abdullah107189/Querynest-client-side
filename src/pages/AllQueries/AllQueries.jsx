import { useEffect, useState } from "react"
import axios from "axios"
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgMenuGridR } from "react-icons/cg";
import { FaComment, FaUser } from "react-icons/fa";

const AllQueries = () => {
    const [queries, setQueries] = useState([])
    const [toggle, setToggle] = useState(true)
    const [fetchLoading, setFetchLoading] = useState(false)
    const [sortedItems, setSortedItems] = useState('Default');

    const [searchValue, setSearchValue] = useState('')
    useEffect(() => {
        setFetchLoading(true)
        // https://query-nest-server-side.vercel.app
        axios.get(`https://b10a11-server-side-abdullah107189.vercel.app/all-queries?search=${searchValue}&sort=${sortedItems}`)
            .then(res => {
                setQueries(res.data)
                setFetchLoading(false)
            })
    }, [searchValue, sortedItems])

    return (
        <div className="my-10 mxw">
            <div className="flex items-center justify-center">
                <input
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="relative dark:border-gray-700 border rounded-full focus:w-3/5 transform duration-300 focus:outline-none focus:shadow-lg focus:border-0 px-5 p-2 md:w-1/2" type="search" placeholder="Search Query" name="" id="" />
            </div>
            <div className="flex items-center justify-end gap-5 px-4 mt-5 sticky top-16 z-10 bgP py-1">
                <div className="flex gap-2">
                    <button onClick={() => setToggle(true)}><CgMenuGridR className={`w-8 h-8 ${toggle ? 'text-blue-500' : ''}`} /></button>
                    <button onClick={() => setToggle(false)}><TfiMenuAlt className={`w-8 h-8 ${toggle ? '' : 'text-blue-500 '}`} /></button>
                </div>
                <div>
                    <select className="border p-2 rounded-lg border-blue-400 cursor-pointer" value={sortedItems} onChange={(e) => setSortedItems(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="asc">Ascending by Date</option>
                        <option value="desc">Descending by Date</option>
                    </select>

                </div>
            </div>

            {
                fetchLoading ?
                    <div className={`grid grid-cols-1 ${toggle ? 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : ''} gap-4 p-4`}>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div
                                key={index}
                                className={`relative ${toggle || 'flex justify-between items-center'} border rounded-lg shadow-md overflow-hidden bgS hover:shadow-lg transition`}
                            >
                                <div className={`absolute top-1 left-1 text-xs px-3 py-1 rounded-md bg-blue-100/60 animate-pulse`}>
                                    <div className="h-4 w-16 bg-blue-300 rounded animate-pulse"></div>
                                    <div className="h-4 w-16 bg-blue-300 rounded mt-2 animate-pulse"></div>
                                </div>
                                <div className={`${toggle || 'md:w-1/2'}`}>
                                    <div className="w-full h-[200px] bg-gray-200 animate-pulse"></div>
                                </div>
                                <div className={`${toggle ? 'text-center' : 'md:w-1/2 items-start'} p-4`}>
                                    <div className="h-6 w-3/4 bg-gray-300 rounded mb-2 animate-pulse"></div>
                                    <div className="h-4 w-full bg-gray-300 rounded mb-3 animate-pulse"></div>
                                    <div className="h-4 w-1/2 bg-gray-300 rounded mb-4 animate-pulse"></div>
                                    <div className="px-5 py-2 rounded-lg bg-gray-200 animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    :
                    <div className={`grid grid-cols-1 ${toggle ? 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : ''} gap-4 p-4`}>
                        {queries.map(query => (
                            <div
                                key={query._id}
                                className={`relative ${toggle ? 'flex-col justify-between items-center' : 'flex-row'} flex h-full dark:border-gray-700 border rounded-lg shadow-md  bgS hover:shadow-lg transition`}
                            >
                                <div className={`px-3 rounded-md text-xs ${toggle && 'dark:bg-gray-800/50 bg-blue-100/60 dark:text-white text-blue-500 items-center'} font-semibold top-1 left-1 absolute ${toggle ? 'flex flex-col' : ''}`}>
                                    <span className={`${toggle || 'dark:bg-gray-700/50 bg-blue-100/60 dark:text-white text-blue-500 badge'}`}>{format(new Date(query.uploadDate), "P")}</span>
                                    <span className={`${toggle || 'dark:bg-gray-700/50 bg-blue-100/60 dark:text-white text-blue-500 badge'}`}>{format(new Date(query.uploadDate), "p")}</span>
                                </div>
                                <div className={`${toggle || 'md:w-1/2'}`}>
                                    <img
                                        src={query.product_url}
                                        alt={query.product_name}
                                        className="w-full h-[200px] object-contain "
                                    />
                                </div>
                                <div className={`${toggle ? '' : 'md:w-1/2 items-start'} p-4 h-full flex flex-col`}>
                                    <h2 className="font-bold">{query.product_name}</h2>
                                    <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">{toggle ? query.query_title.substring(0, 50) : query.query_title} <span className={`${query.query_title.length > 50 && toggle || 'hidden'}`}>...</span></p>
                                    <p className="mb-2 flex gap-2 items-center"><FaComment></FaComment> Recommended : {query.recommendationCount}</p>
                                    <p className="mb-2 flex gap-2 items-center flex-grow-0"><FaUser></FaUser> {query.authorEmail}</p>
                                    <Link className="actionBtn w-full mt-auto text-center" to={`/querie-details/${query?._id}`}>Do Recommend</Link>
                                </div>
                            </div>
                        ))}
                    </div>
            }
        </div>
    );
};

export default AllQueries;