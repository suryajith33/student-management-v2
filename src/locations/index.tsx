import { createBrowserRouter, Navigate } from "react-router-dom";
import { ErrorBoundary } from "../plugins/error-boundary";
import { Locations } from "../constants/locations";
import MainContainer from "../containers/main-container";
import User from "../containers/user";
import Dashboard from "../containers/dashboard-container";

export const webRouter = createBrowserRouter([
	{
		path: Locations.BASE,
		element: <Navigate to={Locations.DASHBOARD} />,
		errorElement: <ErrorBoundary />,
	},
	{
		path: Locations.BASE,
		element: <MainContainer />,

		children: [
			{
				path: Locations.DASHBOARD,
				element: <Dashboard/>
			},
			{
				path: Locations.HOME,
				element: <User />
			}
		],

		errorElement: <ErrorBoundary />,
	},
]);