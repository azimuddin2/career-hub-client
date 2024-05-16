import { GrLocation } from "react-icons/gr";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

const AppliedJob = ({ appliedJob }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = appliedJob;

    return (
        <div className="card lg:card-side border mb-5 rounded">
            <figure className="bg-[#F4F4F4] w-60 m-3 rounded">
                <img src={logo} alt="Album" className=" w-1/2" />
            </figure>
            <div className="p-6">

                <h2 className="text-2xl font-medium text-success">{job_title}</h2>
                <p className='my-2 text-lg text-neutral'>{company_name}</p>

                <div className="flex">
                    <button className='btn btn-outline btn-primary rounded mr-3'>{remote_or_onsite}</button>
                    <button className='btn btn-outline btn-primary rounded'>{job_type}</button>
                </div>

                <div className='mt-2 flex items-center'>
                    <p className='mr-6 flex items-center text-neutral'>
                        <GrLocation />
                        <span className='ms-1'>{location}</span>
                    </p>
                    <p className='flex items-center text-neutral'>
                        <HiOutlineCurrencyDollar className='text-lg' />
                        <span className='ms-1'>Salary: {salary}</span>
                    </p>
                </div>

                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div> */}
            </div>
        </div>
    );
};

export default AppliedJob;