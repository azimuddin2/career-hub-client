import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading/Loading";
import ErrorMessage from "../Shared/ErrorMessage/ErrorMessage";
import Job from "../../components/Job/Job";

const AllJobs = () => {

    const { isLoading, error, data: jobs = [] } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await fetch('https://career-hub-server-zeta.vercel.app/jobs');
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <section className="max-w-screen-lg lg:mx-auto mx-5 mt-12 mb-12 lg:mb-20">
            <div className="text-center">
                <h2 className="text-3xl lg:text-4xl text-accent font-semibold">Featured Jobs</h2>
                <p className="text-neutral text-sm mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    jobs?.map(job => <Job
                        key={job._id}
                        job={job}
                    ></Job>)
                }
            </div>
        </section>
    );
};

export default AllJobs;