import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Testimonials = () => {
    const reviews = [
        {
            image: 'https://i.ibb.co.com/QpNDpmR/Ellipse-91.png',
            name: 'John Doe',
            designation: 'CEO, TechCorp',
            rating: 5,
            review: 'This product changed my life! Highly recommend it.',
        },
        {
            image: 'https://i.ibb.co.com/ZWzykDF/Ellipse-92.png',
            name: 'Jane Smith',
            designation: 'Marketing Manager, XYZ Inc.',
            rating: 4,
            review: 'Amazing service, would definitely use it again.',
        },
        {
            image: 'https://i.ibb.co.com/jkPQShw/Ellipse-2.png',
            name: 'Sam Brown',
            designation: 'Freelance Developer',
            rating: 5,
            review: 'A fantastic experience from start to finish!',
        },
    ];

    return (
        <section data-aos="fade-up-left" className=" py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
                    What Our Users Say
                </h2>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    navigation={true}
                    pagination={{ clickable: true }}
                    loop={true}
                    modules={[Navigation, Pagination]}
                    className="swiper-container"
                >
                    {reviews.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300">
                                <div className="flex items-center mb-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full border-2 border-blue-500 mr-4"
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-600">{testimonial.designation}</p>
                                        <div className="flex text-yellow-400 mt-1">
                                            {Array.from({ length: testimonial.rating }).map((_, idx) => (
                                                <FaStar key={idx} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">"{testimonial.review}"</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
