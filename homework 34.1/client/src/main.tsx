import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import {
	ChakraProvider,
	createSystem,
	defaultConfig,
	defineConfig,
} from "@chakra-ui/react";
import Home from "./pages/Home.tsx";
import Hotels from "./pages/Hotels.tsx";
import About from "./pages/About.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "hotels",
				element: <Hotels />,
			},
			{
				path: "about",
				element: <About />,
			},
		],
	},
]);

const config = defineConfig({
	theme: {
		tokens: {
			colors: {},
		},
	},
});

const system = createSystem(defaultConfig, config);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ChakraProvider value={system}>
			<RouterProvider router={router}></RouterProvider>
		</ChakraProvider>
	</StrictMode>
);
