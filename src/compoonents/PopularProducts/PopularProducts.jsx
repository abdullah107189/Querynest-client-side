import { useEffect, useState } from 'react';
import axios from 'axios';

const PopularProducts = () => {
    const [popularQueries, setPopularQueries] = useState([]);
    useEffect(() => {
        axios.get('https://b10a11-server-side-abdullah107189.vercel.app/popular-queries')
            .then(res => setPopularQueries(res.data))
    }, []);

    return (
        <div className="mx-auto px-4 md:pt-20 pt-10" >
            <h2 className="text-3xl font-bold text-center mb-8">Popular 5 Products</h2>

            <h3 className="text-2xl font-semibold mb-4 text-center">Top Recommendation Products</h3>
            <div>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {popularQueries.map((product, index) => (
                        <li key={index} className="hover:scale-105 transform duration-300 flex items-center bgP shadow-md rounded-md p-2 border-dashed border-2 bg[#2f4156]">
                            <img
                                src={product.product_url}
                                alt={product.product_name}
                                className="w-16 h-16 object-cover rounded-lg mr-4"
                            />
                            <div>
                                <h4 className="text-lg font-medium">{product.product_name}</h4>
                                <p className="text-gray-500">Queries: {product.recommendationCount}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PopularProducts;
