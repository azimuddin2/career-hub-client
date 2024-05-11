import Category from "./Category";
import account from '../../../assets/icons/account.png';
import creative from '../../../assets/icons/creative.png';
import marketing from '../../../assets/icons/marketing.png';
import engineering from '../../../assets/icons/engineering.png'

const Categories = () => {

    const categories = [
        {
            id: 1,
            logo: account,
            category_name: "Account & Finance",
            availability: "300 Jobs Available"
        },
        {
            id: 2,
            logo: creative,
            category_name: "Creative Design",
            availability: "100+ Jobs Available"
        },
        {
            id: 3,
            logo: marketing,
            category_name: "Marketing & Sales",
            availability: "150 Jobs Available"
        },
        {
            id: 4,
            logo: engineering,
            category_name: "Engineering Job",
            availability: "224 Jobs Available"
        }
    ];

    return (
        <section className="max-w-screen-lg mx-auto my-20">
            <div className="text-center">
                <h2 className="text-4xl text-accent font-semibold">Job Category List</h2>
                <p className="text-neutral text-sm mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-4">
                {
                    categories?.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </section>
    );
};

export default Categories;