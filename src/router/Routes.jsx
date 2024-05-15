import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllJobs from "../pages/AllJobs/AllJobs";
import Blog from "../pages/Blog/Blog";
import JobDetails from "../pages/JobDetails/JobDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'all-jobs',
                element: <AllJobs></AllJobs>
            },
            {
                path: '/job/:id',
                element: <JobDetails></JobDetails>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/job/${params.id}`)
                }
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
        ],
    }
]);

export default router;