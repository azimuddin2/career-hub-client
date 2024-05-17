import { GrLocation } from "react-icons/gr";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

const AppliedJob = ({ appliedJob }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = appliedJob;

    return (
        <div className="lg:card lg:card-side p-5 lg:p-0 border mb-5 lg:rounded">
            <figure className="lg:bg-[#F4F4F4] lg:w-60 m-3 rounded">
                <img src={logo} alt="Album" className="w-28 lg:w-1/2" />
            </figure>
            <div className="lg:p-8">
                <h2 className="text-xl lg:text-2xl font-medium text-success">{job_title}</h2>
                <p className='my-2 text-lg text-neutral'>{company_name}</p>
                <div className="flex">
                    <button className='btn btn-outline btn-primary rounded mr-3'>{remote_or_onsite}</button>
                    <button className='btn btn-outline btn-primary rounded'>{job_type}</button>
                </div>
                <div className='mt-2 lg:flex items-center'>
                    <p className='mr-6 flex items-center text-neutral'>
                        <GrLocation />
                        <span className='ms-1'>{location}</span>
                    </p>
                    <p className='flex items-center text-neutral'>
                        <HiOutlineCurrencyDollar className='text-lg' />
                        <span className='ms-1'>Salary: {salary}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;