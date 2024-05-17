import { useQuery } from "@tanstack/react-query";
import PageCover from "../../components/PageCover/PageCover";
import Loading from "../Shared/Loading/Loading";
import ErrorMessage from "../Shared/ErrorMessage/ErrorMessage";
import AppliedJob from "./AppliedJob";
import { useState } from "react";

const AppliedJobs = () => {
    const [jobFilter, SetJobFilter] = useState([]);

    const { isLoading, error, data: appliedJobs = [] } = useQuery({
        queryKey: ['apply-job', jobFilter],
        queryFn: async () => {
            const res = await fetch(`https://career-hub-server-zeta.vercel.app/apply-job?filter=${jobFilter}`);
            const data = await res.json();
            return data;
        }
    });

    const options = ['All', 'Remote', 'Onsite'];
    const handleJobFilter = (event) => {
        SetJobFilter(event.target.value);
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <section>
            <PageCover title={'Applied Jobs'}></PageCover>
            <div className="max-w-screen-lg lg:mx-auto mx-5 my-12 lg:my-20">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-success text-lg">Applied Jobs: 0{appliedJobs?.length}</h2>
                    <select
                        value={jobFilter}
                        onChange={handleJobFilter}
                        className="select bg-[#F4F4F4] border-0 rounded lg:w-40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                        <option disabled selected>Filter By</option>
                        {
                            options.map((option, index) => <option
                                key={index}
                                value={option}
                            >{option}</option>)
                        }
                    </select>
                </div>
                <div>
                    {
                        appliedJobs?.map(appliedJob => <AppliedJob
                            key={appliedJob._id}
                            appliedJob={appliedJob}
                        ></AppliedJob>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AppliedJobs;