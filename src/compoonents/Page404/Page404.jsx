import page from "../../assets/errorPage.svg";
import { Link } from 'react-router-dom';
const Page404 = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <img className="h-[80vh]" src={page} alt="" />
            <Link to="/" className="actionBtn dark:bg-transparent w-60 text-center">Back to Home</Link>
        </div>
    );
};

export default Page404;