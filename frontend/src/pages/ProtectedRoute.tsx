import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
    const token = useSelector((state: any) => state.auth.token);
    const storedToken = localStorage.getItem('authToken')

    if (!token && !storedToken) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;