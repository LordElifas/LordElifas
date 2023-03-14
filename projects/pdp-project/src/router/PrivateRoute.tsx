import { FC, ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

// routes
import routes from 'router/routes';

// verifier
import { isUserLoggedIn } from '../helpers/verifiers';

interface Props {
    component: ComponentType;
    path?: string;
}

const PrivateRoute: FC<Props> = ({ component: RouteComponent }) => {
    if (isUserLoggedIn()) return <RouteComponent />;

    return <Navigate to={routes.PUBLIC.LOGIN.path} />;
};

export default PrivateRoute;
