
const Footer = () => {
    return (
        <div className="bg-accent text-white">
            <div className="max-w-screen-lg mx-auto">
                <footer className="footer py-12">
                    <nav className='w-64'>
                        <h2 className='text-white font-semibold text-2xl'>CareerHub</h2>
                        <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
                <footer className="footer py-4 border-t border-neutral">
                    <aside className="items-center grid-flow-col">
                        <p>© 2024 CareerHub. All Rights Reserved</p>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <p>Powered by CareerHub</p>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;