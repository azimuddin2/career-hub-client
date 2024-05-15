import { useLoaderData } from "react-router-dom";
import PageCover from "../../components/PageCover/PageCover";
import { GrLocation } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { HiOutlineCurrencyDollar, HiOutlinePhone } from "react-icons/hi";
import { MdOutlineWorkHistory } from "react-icons/md";

const JobDetails = () => {
    const jobDetails = useLoaderData();
    const { company_name, job_title, job_description, job_responsibility, educational_requirements, experiences, salary, contact_information } = jobDetails;

    return (
        <section>
            <PageCover title={'Job Details'}></PageCover>

            <div className="max-w-screen-lg mx-auto my-16 flex gap-12">

                <div className="w-3/5">
                    <p className="text-neutral mb-4"><span className="text-accent font-medium">Company Name:</span> {company_name}</p>
                    <p className="text-neutral mb-4"><span className="text-accent font-medium">Job Description:</span> {job_description}</p>
                    <p className="text-neutral mb-4"><span className="text-accent font-medium">Job Responsibility:</span> {job_responsibility}</p>
                    <p className="text-neutral mb-4"><span className="text-accent font-medium">Educational Requirements:</span> {educational_requirements}</p>
                    <p className="text-neutral"><span className="text-accent font-medium">Experiences:</span> {experiences}</p>
                </div>

                <div className="w-1/3">
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

                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white flex items-center rounded font-medium w-full mt-3">Apply Now</button>

                </div>

            </div>

        </section>
    );
};

export default JobDetails;