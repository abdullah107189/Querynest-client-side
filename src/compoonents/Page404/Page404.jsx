import Lottie from "lottie-react";
import page from "../../assets/page.json";
import { Link} from 'react-router-dom';
const Page404 = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <Lottie className="sm:w-2/5 md:w-2/5 mx-auto " animationData={page} loop={true} />
            <Link to="/" className="px-5 py-2 rounded-lg border bg-gray-100 hover:bg-gray-200">Back to Home</Link>
        </div>
    );
};

export default Page404;