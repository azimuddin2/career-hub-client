import { useQuery } from "@tanstack/react-query";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import Job from "../../../components/Job/Job";
import Loading from "../../Shared/Loading/Loading";
import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Jobs = () => {

    const { isLoading, error, data: jobs = [] } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await fetch('https://career-hub-server-zeta.vercel.app/jobs');
            const data = await res.json();
            return data;
        }
    });

    const jobsCollection = jobs.slice(0, 4);

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <section className="max-w-screen-lg mx-auto mb-20">
            <div className="text-center">
                <h2 className="text-4xl text-accent font-semibold">Featured Jobs</h2>
                <p className="text-neutral text-sm mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    jobsCollection?.map(job => <Job
                        key={job._id}
                        job={job}
                    ></Job>)
                }
            </div>
            <div className="flex justify-center mt-10">
                <Link to={'/all-jobs'}>
                    <Button>
                        <span>See All Jobs</span>
                        <IoArrowForwardCircleOutline className="text-xl ms-[-3px]" />
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default Jobs;