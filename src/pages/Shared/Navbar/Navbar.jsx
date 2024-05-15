import CustomLink from "./CustomLink";
import logo from '../../../assets/logo/logo.png';
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";

const Navbar = () => {

    const navOptions = <>
        <li>
            <CustomLink to='/'>Home</CustomLink>
        </li>
        <li>
            <CustomLink to='/applied-jobs'>Applied Jobs</CustomLink>
        </li>
        <li>
            <CustomLink to='/blog'>Blog</CustomLink>
        </li>
    </>

    return (
        <div className="bg-[#F9FAFF]">
            <div className="navbar max-w-screen-lg mx-auto">
                <div className="navbar-start">


                    <div className="lg:hidden">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-[#F9FAFF] text-base-content">
                                <Link to={'/'}>
                                    <img className="mb-5" src={logo} alt="logo" />
                                </Link>
                                {navOptions}
                            </ul>
                        </div>
                    </div>


                    <Link to={'/'}>
                        <img style={{ height: '20px' }} src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/all-jobs'}>
                        <Button>Star Applying</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;