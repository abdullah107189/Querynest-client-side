
import BlogSection from "../../compoonents/Blogs/Blogs";
import ContactSection from "../../compoonents/ContactSection/ContactSection";
import PopularProducts from "../../compoonents/PopularProducts/PopularProducts";
import Queries from "../../compoonents/Queries/Queries";
import Slider from "../../compoonents/Slider/Slider";
import NewsletterSubscription from "../../compoonents/Subscription/Subcription";

const Home = () => {
    return (
        <div className="mxw">
            <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" id="slider">
                <Slider></Slider>
            </div>
            <div className="my-10" data-aos="fade-up" data-aos-duration="600" id="queries">
                <Queries></Queries>
            </div>
            <section className="my-10" data-aos="fade-up" data-aos-duration="600" id="popularProducts">
                <PopularProducts></PopularProducts>
            </section>
            <section className="my-10" data-aos="fade-up" data-aos-duration="600" id="blogs">
                <BlogSection></BlogSection>
            </section>
            <section className="my-10" data-aos="fade-up" data-aos-duration="600" id="subscription">
                <NewsletterSubscription></NewsletterSubscription>
            </section>
            <section className="my-10" data-aos="fade-up" data-aos-duration="600" id="contact">
                <ContactSection></ContactSection>
            </section>
        </div>
    );
};

export default Home;