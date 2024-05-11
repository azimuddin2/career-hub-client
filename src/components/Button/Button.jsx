
const Button = ({ children }) => {
    return (
        <button
            className="btn bg-gradient-to-r from-primary to-secondary text-white rounded font-medium"
        >
            {children}
        </button>
    );
};

export default Button;