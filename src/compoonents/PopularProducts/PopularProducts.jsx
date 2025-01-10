import { useEffect, useState } from 'react';
import axios from 'axios';

const PopularProducts = () => {
    const [popularQueries, setPopularQueries] = useState([]);
    useEffect(() => {
        // http://localhost:4545
        axios.get('http://localhost:4545/popular-queries')
            .then(res => setPopularQueries(res.data))
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 md:my-2 my-5 md:py-8 py-5" >
            <h2 className="text-3xl font-bold text-center mb-8">Popular 5 Products</h2>

            <h3 className="text-2xl font-semibold mb-4 text-center">Top Recommendation Products</h3>
            <div>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {popularQueries.map((product, index) => (
                        <li key={index} className="flex items-center bg-white shadow-md rounded-md p-2 border-dashed border-2 bg[#2f4156]">
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
