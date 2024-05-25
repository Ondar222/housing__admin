import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../providers/auth/auth";


interface ProtectedRouteProps {
    children: ReactNode
    authCheck?: boolean
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, authCheck = true }) => {
    const { isAuth } = useAuth()

    if (authCheck === true && !isAuth) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export { ProtectedRoute }