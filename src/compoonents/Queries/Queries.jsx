import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { FaComment, FaUser } from "react-icons/fa";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);
  useEffect(() => {
    setFetchLoading(true);
    axios
      .get(
        `https://b10a11-server-side-abdullah107189.vercel.app/all-queries?limit=8`
      )
      .then((res) => {
        setQueries(res.data);
        setFetchLoading(false);
      });
  }, []);

  return (
    <div className="md:pt-20 pt-10">
      <h1 className="md:text-4xl text-2xl font-bold text-center md:mb-10 mb-5">
        Recent Added Queries
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {fetchLoading === true
          ? Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="relative border rounded-lg shadow-md overflow-hidden dark:bg-[#1a2734] bgS hover:shadow-lg transition "
              >
                <div className="px-3 rounded-md bg-blue-100/60 text-blue-500 font-semibold top-1 left-1 absolute flex flex-col">
                  <span className="h-4 w-16 bg-blue-300 animate-pulse rounded-md mb-2"></span>
                  <span className="h-4 w-12 bg-blue-300 animate-pulse rounded-md"></span>
                </div>

                <div className="w-full h-[200px] bg-gray-200 animate-pulse"></div>

                <div className="p-4">
                  <div className="h-6 w-3/4 bg-gray-300 animate-pulse rounded-md mb-3"></div>
                  <div className="h-4 w-5/6 bg-gray-300 animate-pulse rounded-md mb-3"></div>
                  <div className="h-4 w-1/2 bg-gray-300 animate-pulse rounded-md mb-4"></div>

                  <div className="h-10 w-full bg-blue-300 animate-pulse rounded-md"></div>
                </div>
              </div>
            ))
          : queries.map((query) => (
              <div
                key={query._id}
                className="relative border dark:border-gray-500 rounded-lg shadow-md overflow-hidden dark:bg-[#223d59] bgS hover:shadow-lg transition h-full flex flex-col flex-grow"
              >
                <div className="px-3 text-xs rounded-md dark:bg-gray-800/50 bg-blue-100/60 dark:text-white text-blue-500 font-semibold top-1 left-1 absolute flex flex-col items-center">
                  <span>{format(new Date(query.uploadDate), "P")}</span>
                  <span>{format(new Date(query.uploadDate), "p")}</span>
                </div>
                <img
                  src={query.product_url}
                  alt={query.product_name}
                  className="w-full h-[200px] object-contain flex-grow-0"
                  onError={(e) =>
                    (e.target.src =
                      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png")
                  }
                />
                <div className="p-4 h-full flex flex-col">
                  <h2 className="text-lg font-bold">{query.product_name}</h2>
                  <p className="text-sm mb-3 dark:text-gray-300 text-gray-600">
                    {query.query_title.substring(0, 50)}...
                  </p>
                  <p className="mb-2 flex gap-2 items-center">
                    <FaComment></FaComment> Recommended :{" "}
                    {query.recommendationCount}
                  </p>
                  <p className="mb-2 flex gap-2 items-center flex-grow-0">
                    <FaUser></FaUser> {query.authorEmail}
                  </p>
                  <Link
                    className="actionBtn mt-auto text-center"
                    to={`/querie-details/${query?._id}`}
                  >
                    Do Recommend
                  </Link>
                </div>
              </div>
            ))}
      </div>
      <div className="flex items-center">
        <Link
          to={"/queries"}
          className="activeActionBtn rounded-full px-10 py-3 mx-auto my-5"
        >
          See All Queries
        </Link>
      </div>
    </div>
  );
};

export default Queries;
