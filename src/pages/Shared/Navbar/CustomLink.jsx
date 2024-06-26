import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            className="font-medium"
            style={{
                color: match ? "#7E90FE" : "#757575",
                background: '#F9FAFF'
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;