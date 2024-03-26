import React, { FC} from 'react';
import { Navigate, Route } from 'react-router-dom';

interface PrivateRouteProps {
    element: React.ReactNode;
    isAuthenticated: boolean;
    path: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ element, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        element={isAuthenticated ? element : <Navigate to="/" />}
    />
);

// const Private: FC<{ Component: reReactNode }> = ({ Component }) => {
//     const auth = false; //your logic

//     return auth ? <Component /> : <Navigate to="/login" />
// }

export { PrivateRoute }