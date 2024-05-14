import { Link } from "react-router-dom";
import userImg from '../../../assets/images/user.png';
import Button from "../../../components/Button/Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Banner = () => {
    return (
        <section className="bg-[#F9FAFF]">
            <div className="max-w-screen-lg lg:mx-auto mx-5">
                <div className="hero-content p-0 flex-col lg:flex-row-reverse">
                    <div className='flex-1 mx-auto'>
                        <img
                            src={userImg}
                            alt='user'
                            className=" w-full mx-auto"
                        />
                    </div>
                    <div className='flex-1 mt-4 lg:mt-0'>
                        <h1 className="text-4xl lg:text-5xl text-accent font-bold mb-2 lg:mb-4">One Step <br /> Closer To Your <br /> <span className="text-primary">Dream Job</span></h1>
                        <p className="my-4 lg:my-5 text-accent text-sm lg:w-4/5">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <Link to={'/all-jobs'}>
                            <Button>
                                <span>Get Started</span>
                                <IoArrowForwardCircleOutline className="text-xl ms-[-3px]" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;