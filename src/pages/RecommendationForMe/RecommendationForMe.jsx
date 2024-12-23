import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from 'axios'
const RecommendationForMe = () => {
    const { user } = useContext(AuthContext)
    const [recommendData, setRecommendData] = useState([])
    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:4545/recommendation-for-me/${user.email}`)
                .then(res => {
                    console.log(res.data);
                    setRecommendData(res.data)
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
                                <th className="border px-4 py-2">Recommend Email</th>
                                <th className="border px-4 py-2">Recommend Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recommendData.map((rec, index) => (
                                <tr key={index}>
                                    <td className="border">{rec.productName}</td>

                                    <td className="border">{rec.recommendedProductName}</td>
                                    <td className="border">
                                        <img src={rec.recommendedProductImage} alt={rec.recommendedProductName} className="min-w-20 h-20 mx-auto object-cover rounded" />
                                    </td>
                                    <td className="border">{rec.recommenderEmail}</td>
                                    <td className="border">{rec.recommendationReason}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default RecommendationForMe;