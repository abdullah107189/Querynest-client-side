import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='minHF my-10'>
            <h1 className='text-4xl  text-center font-bold mb-5'>Contact section</h1>
            <div className="md:flex  justify-between gap-10 md:p-0 p-4">
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Send A Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4 border p-5 rounded-lg">
                        <div>
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                                value={name}
                                onChange={(e) => setName(e.target.value)}

                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-gray-700">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}

                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}

                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
                    <p className="text-gray-600">
                        Etiam sit amet orci eget eros faucibus tincidunt. Pellentesque commodo eros a enim. Etiam rhoncus. Nulla facilisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras sagittis.
                    </p>
                    <p className="text-gray-600">
                        Vestibulum turpis sem, aliquet eget, lobortis pellentesque.
                    </p>
                    <div className="flex mt-4">
                        <a href="#" className="text-blue-500 mx-2">
                            <FaFacebook />
                        </a>
                        <a href="#" className="text-blue-500 mx-2">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-blue-500 mx-2">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-blue-500 mx-2">
                            <FaPinterest />
                        </a>
                        <a href="#" className="text-blue-500 mx-2">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;