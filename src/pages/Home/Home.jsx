
import BlogSection from "../../compoonents/Blogs/Blogs";
import ContactSection from "../../compoonents/ContactSection/ContactSection";
import PopularProducts from "../../compoonents/PopularProducts/PopularProducts";
import Queries from "../../compoonents/Queries/Queries";
import Slider from "../../compoonents/Slider/Slider";
import NewsletterSubscription from "../../compoonents/Subscription/Subcription";

const Home = () => {
    return (
        <div className="mxw">
            <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <Slider></Slider>
            </div>
            <div className="my-10" data-aos="fade-up" data-aos-duration="600" >
                <Queries></Queries>
            </div>
            <section className="my-10" data-aos="fade-up" data-aos-duration="600">
                <PopularProducts></PopularProducts>
            </section>
            <section className="my-10" data-aos="fade-up" data-aos-duration="600">
                <BlogSection></BlogSection>
            </section>
            <section>
                <NewsletterSubscription></NewsletterSubscription>
            </section>
            <section className="my-32" data-aos="fade-up" data-aos-duration="600" >
                <ContactSection></ContactSection>
            </section>
        </div>
    );
};

export default Home;