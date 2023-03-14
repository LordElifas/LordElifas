// config
import routes from 'router/routes';

const { PUBLIC } = routes;

const isPrivateRoute = (pathname: string) => !Object.values(PUBLIC).find(({ path }) => path === pathname);

export default isPrivateRoute;
