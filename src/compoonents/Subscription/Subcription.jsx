import { useState } from 'react';

const NewsletterSubscription = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setMessage('Thank you for subscribing!');
            setEmail('');
        } else {
            setMessage('Please enter a valid email address.');
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className='px-4 md:pt-20 pt-10'>
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white md:py-10 py-5">
                <div className="container mx-auto text-center max-w-2xl">
                    <h2 className="text-3xl font-bold mb-4">Stay Updated with the Latest Recommendations</h2>
                    <p className="text-lg mb-6">
                        Subscribe to our newsletter and never miss an update on new posts, products, and trends.
                    </p>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 items-center">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-grow px-4 py-3 rounded-md textP focus:outline-none focus:ring-2 focus:ring-blue-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="actionBtn px-4 py-3 transition transform hover:scale-105"
                        >
                            Subscribe
                        </button>
                    </form>
                    {message && (
                        <p className={`mt-4 text-lg ${message.includes('Thank you') ? 'text-green-300' : 'text-red-300'}`}>
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewsletterSubscription;
