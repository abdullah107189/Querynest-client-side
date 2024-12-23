
import PopularProducts from "../../compoonents/PopularProducts/PopularProducts";
import Queries from "../../compoonents/Queries/Queries";
import Slider from "../../compoonents/Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Queries></Queries>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;