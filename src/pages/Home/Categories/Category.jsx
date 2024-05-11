
const Category = ({ category }) => {
    const { logo, category_name, availability } = category;

    return (
        <div className="bg-[#F9FAFF] rounded p-6">
            <figure className="bg-[#EFEDFF] w-14 h-14 rounded-lg flex justify-center items-center">
                <img src={logo} alt={category_name} className=" w-1/2 mx-auto"/>
            </figure>
            <div className="mt-3">
                <h2 className="text-lg text-success font-semibold">{category_name}</h2>
                <p className="text-neutral">{availability}</p>
            </div>
        </div>
    );
};

export default Category;