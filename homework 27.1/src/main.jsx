import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import ContactsPage from "./pages/Contacts.jsx";
import Root from "./pages/Root.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "about",
				element: <AboutPage />,
			},
			{
				path: "contacts",
				element: <ContactsPage />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</StrictMode>
);
