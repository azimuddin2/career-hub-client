
const ErrorMessage = ({ message }) => {
    return (
        <div className="my-12">
            <p className="text-red-500 text-center">Error: {message}</p>
        </div>
    );
};

export default ErrorMessage;