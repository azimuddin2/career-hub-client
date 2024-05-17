import { useLoaderData, useNavigate } from "react-router-dom";
import PageCover from "../../components/PageCover/PageCover";
import { GrLocation } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { HiOutlineCurrencyDollar, HiOutlinePhone } from "react-icons/hi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { toast } from "react-toastify";

const JobDetails = () => {
    const jobDetails = useLoaderData();
    const { company_name, job_title, job_description, job_responsibility, educational_requirements, experiences, salary, contact_information } = jobDetails;
    const navigate = useNavigate();

    const handleApplyNow = (job) => {
        const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;

        const applyJobInfo = {
            logo,
            job_title,
            company_name,
            remote_or_onsite,
            job_type,
            location,
            salary
        };
        fetch('https://career-hub-server-zeta.vercel.app/apply-job', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(applyJobInfo)
        })
            .then(res => res.json())
            .then((result) => {
                if (result.insertedId) {
                    navigate('/applied-jobs');
                    toast.success('Job application is successful.');
                }
            })
    };

    return (
        <section>
            <PageCover title={'Job Details'}></PageCover>
            <div className="max-w-screen-lg lg:mx-auto mx-5 my-12 lg:my-16 lg:flex gap-12">
                <div className="lg:w-3/5 w-full">
                    <p className="text-neutral mb-4"><span className="text-accent font-medium">Company Name:</span> {company_name}</p>
                    <p className="text-neutral mb-4"><span className="text-accent font-medium">Job Description:</span> {job_description}</p>
                    <p className="text-neutral mb-4"><span className="text-accent font-medium">Job Responsibility:</span> {job_responsibility}</p>
                    <p className="text-neutral mb-4"><span className="text-accent font-medium">Educational Requirements:</span> {educational_requirements}</p>
                    <p className="text-neutral"><span className="text-accent font-medium">Experiences:</span> {experiences}</p>
                </div>
                <div className="lg:w-1/3 w-full mt-5 lg:mt-0">
                    <div className="bg-[#F4F2FF] p-6 rounded">
                        <div>
                            <h3 className="border-b text-lg text-accent font-semibold pb-2">Job Details</h3>
                            <p className="flex items-center my-2">
                                <HiOutlineCurrencyDollar className="text-lg text-primary mr-1" />
                                <h6 className="text-neutral"><span className="text-success font-medium">Salary:</span> {salary} (Per Month)</h6>
                            </p>
                            <p className="flex items-center">
                                <MdOutlineWorkHistory className="text-lg text-primary mr-1" />
                                <h6 className="text-neutral"><span className="text-success font-medium">Job Title:</span> {job_title}</h6>
                            </p>
                        </div>
                        <div className="mt-5">
                            <h3 className="border-b text-lg text-accent font-semibold pb-2">Contact Information</h3>
                            <p className="flex items-center mt-2">
                                <HiOutlinePhone className="text-lg text-primary mr-1" />
                                <h6 className="text-neutral"><span className="text-success font-medium">Phone:</span> {contact_information.phone}</h6>
                            </p>
                            <p className="flex items-center my-2">
                                <FiMail className="text-base text-primary mr-2" />
                                <h6 className="text-neutral"><span className="text-success font-medium">Email:</span> {contact_information.email}</h6>
                            </p>
                            <p className="flex">
                                <GrLocation className="text-2xl text-primary mr-1" />
                                <h6 className="text-neutral"><span className="text-success font-medium">Address:</span> {contact_information.address}</h6>
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => handleApplyNow(jobDetails)}
                        className="btn bg-gradient-to-r from-primary to-secondary text-white flex items-center rounded font-medium w-full mt-3"
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;