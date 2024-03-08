import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Main } from "./page/main/Mainpage";
import { InfoPage } from "./page/info/Infopage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Main /> },
			{
				path: "/InfoPage/:pageName",
				element: <InfoPage />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<RecoilRoot>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</RecoilRoot>,
);
