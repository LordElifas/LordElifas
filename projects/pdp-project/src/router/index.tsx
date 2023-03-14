import { Routes, Route, Navigate } from 'react-router-dom';

// router
import PrivateRoute from 'router/PrivateRoute';
import CabinetLayout from 'router/layouts/CabinetLayout';
import { PRIVATE } from 'router/routes';


const Router = () => {

    return (
        <Routes>
            {Object.values(PRIVATE).map(({ path, titleKey, component: Component }: any) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <CabinetLayout titleKey={titleKey}>
                            <PrivateRoute component={Component} />
                        </CabinetLayout>
                    }
                />
            ))}
            <Route path="*" element={<Navigate to={PRIVATE.MAIN.path} />} />
        </Routes>
    );
};

export default Router;
