import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-accent text-neutral">
            <div className="max-w-screen-lg lg:mx-auto mx-5">
                <footer className="footer pt-20 pb-10">
                    <nav className='w-64'>
                        <h2 className='text-white font-semibold text-2xl'>CareerHub</h2>
                        <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <div className="flex items-center mt-5">
                            <p className="bg-white rounded-full w-8 h-8 cursor-pointer flex justify-center items-center mr-2">
                                <FaFacebookF className="text-[#337FFF] text-lg" />
                            </p>
                            <p className="bg-white rounded-full w-8 h-8 cursor-pointer flex justify-center items-center mr-2">
                                <FaTwitter className="text-lg text-[#33CCFF]" />
                            </p>
                            <p className="bg-white rounded-full w-8 h-8 cursor-pointer flex justify-center items-center">
                                <FaLinkedinIn className="text-lg text-[#0077B5]" />
                            </p>
                        </div>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-white">Company</h6>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Work</a>
                        <a className="link link-hover">Latest News</a>
                        <a className="link link-hover">Careers</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-white">Product</h6>
                        <a className="link link-hover">Prototype</a>
                        <a className="link link-hover">Plans & Pricing</a>
                        <a className="link link-hover">Customers</a>
                        <a className="link link-hover">Integrations</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-white">Support</h6>
                        <a className="link link-hover">Help Desk</a>
                        <a className="link link-hover">Sales</a>
                        <a className="link link-hover">Become a Partner</a>
                        <a className="link link-hover">Developers</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-white">Contact</h6>
                        <a className="link link-hover">524 Broadway , NYC</a>
                        <a className="link link-hover">+1 777 - 978 - 5570</a>
                    </nav>
                </footer>
                <footer className="py-4 border-t border-neutral">
                    <p className="text-center">© 2024 CareerHub. All Rights Reserved</p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;