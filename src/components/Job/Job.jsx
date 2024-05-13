import React from 'react';
import Button from '../Button/Button';
import { GrLocation } from 'react-icons/gr';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { CiDollar } from 'react-icons/ci';

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;

    return (
        <div className="p-6 border rounded bg-base-100">
            <figure>
                <img src={logo} alt="Shoes" className=" w-28" />
            </figure>
            <div className="mt-5">
                <h2 className="text-2xl font-medium text-success">{job_title}</h2>
                <p className='my-2 text-lg text-neutral'>{company_name}</p>
                <button className='btn btn-outline btn-primary rounded mr-4'>{remote_or_onsite}</button>
                <button className='btn btn-outline btn-primary rounded'>{job_type}</button>

                <div className='mt-2 flex items-center'>
                    <p className='mr-10 flex items-center text-neutral'>
                        <GrLocation />
                        <span className='ms-1'>{location}</span>
                    </p>
                    <p className='flex items-center text-neutral'>
                        <HiOutlineCurrencyDollar className='text-lg'/>
                        <span className='ms-1'>Salary: {salary}</span>
                    </p>
                </div>

                <div className="card-actions justify-start mt-4">
                    <Button>View Details</Button>
                </div>
            </div>
        </div>
    );
};

export default Job;