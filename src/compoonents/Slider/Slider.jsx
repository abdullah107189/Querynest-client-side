import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css'
import { Pagination, Autoplay } from 'swiper/modules';
import celebrat from '../../assets/banner_slider.svg'
import banner2 from '../../assets/slider3.jpg'
import { Link } from 'react-router-dom';
const Slider = () => {
    return (
        <Swiper
            className="mySwiper z-0 flex items-center justify-center md:min-h-[60vh]"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                    return `<span class="${className} custom-pagination"></span>`;
                },
            }}
        >
            <SwiperSlide>
                <div
                    className="relative min-h-[40vh] md:min-h-[60vh] flex items-center justify-center bg-cover bg-center text-white"
                    style={{
                        backgroundImage: `url(${banner2})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative text-center z-10 px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Welcome to QueryNest
                        </h1>
                        <p className="text-lg md:text-xl mb-6">
                            A platform to ask questions, share insights, and find solutions together.
                        </p>
                        <Link
                            to={'/add-queries'}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg"
                        >
                            Add Queries
                        </Link>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className='flex items-center justify-center'>
                <div
                    className=" min-h-[40vh] md:min-h-[60vh] bg-cover bg-center text-white flex items-center justify-center backgroundImage1  relative border"

                >
                    <div className='bg-black absolute inset-0 opacity-50'>
                    </div>
                    <div className="text-center rounded-lg md:w-2/3 w-11/12 mx-auto z-10 flex flex-col md:gap-5 gap-2">
                        <h1 className="md:text-4xl text-xl font-bold">Have a Question?</h1>
                        <p className="mt-2 text-lg">If you have any question you can ask below or enter what you are looking for!</p>
                        <div className="flex items-center">
                            <input
                                type="text"
                                placeholder="Type your search terms here"
                                className="text-black w-full px-5 p-3 rounded-lg rounded-r-none  focus:outline-none"
                            />
                            <button
                                type="submit"
                                className=" rounded-r-lg px-5 p-3 bg-blue-500 hover:bg-blue-600 text-white"
                            >
                                SEARCH
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className='flex items-center justify-normal  my-auto'>
                <div className="max-h-[40vh] md:max-h-[60vh] md:p-10 md:flex items-center justify-center ">
                    <div className=" z-20 md:w-1/2 p-4">
                        <p>Who we are</p>
                        <h2 className="md:text-4xl text-xl font-bold md:mb-4 mb-2">Our Job is to Empower the World</h2>
                        <p className="text-lg mb-4">Through the development of technology through combined knowledge.</p>
                        <p className="text-sm mb-4">Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin molestie malesuada.</p>
                    </div>
                    <div className='md:w-1/2 mx-auto flex items-end'>
                        <img src={celebrat} alt="Image of two students celebrating" className=" m-auto" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
