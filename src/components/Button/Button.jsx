
const Button = ({ children }) => {
    return (
        <button
            className="btn bg-gradient-to-r from-primary to-secondary text-white flex items-center rounded font-medium"
        >
            {children}
        </button>
    );
};

export default Button;