import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const RecommendationForMe = () => {
    const { user } = useContext(AuthContext)
    const [recommendData, setRecommendData] = useState([])
    const axiosInstance = useAxiosSecure()
    const [fetchLoding, setFetchLoading] = useState(false)
    useEffect(() => {
        if (user) {
            setFetchLoading(true)
            axiosInstance.get(`/recommendation-for-me/${user.email}`)
                .then(res => {
                    setRecommendData(res.data);
                    setFetchLoading(false)
                })
                .catch(err => {
                    if (err) {
                        setFetchLoading(false)
                    }
                })
        }
    }, [user])
    return (
        <div>
            <div className="minHF">
                <h1 className="text-2xl font-bold mb-4">My Recommendations</h1>
                <div className="overflow-x-auto my-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">My Product</th>
                                <th className="border px-4 py-2">Recommend Product</th>
                                <th className="border px-4 py-2">Recommend Image</th>
                                <th className="border px-4 py-2">Recommender Email</th>
                                <th className="border px-4 py-2">Recommend Details</th>
                            </tr>
                        </thead>
                        {
                            fetchLoding ?
                                <tr className="text-center">
                                    <td className="border text-3xl font-bold" colSpan={5}>Loading...</td>
                                </tr>
                                :
                                recommendData.length === 0 ?
                                    <tr className="text-center">
                                        <td className="border text-3xl font-bold" colSpan={5}>No Recommend data here</td>
                                    </tr>
                                    :
                                    <tbody>
                                        {
                                            recommendData.map((rec, index) => (
                                                <tr key={index}>
                                                    <td className="border">{rec.productName}</td>

                                                    <td className="border">{rec.recommendedProductName}</td>
                                                    <td className="border">
                                                        <img src={rec.recommendedProductImage} alt={rec.recommendedProductName} className="min-w-20 h-20 mx-auto object-cover rounded" />
                                                    </td>
                                                    <td className="border">{rec.recommenderEmail}</td>
                                                    <td className="border">{rec.recommendationReason}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                        }
                    </table>
                </div>
            </div>
        </div >
    );
};

export default RecommendationForMe;