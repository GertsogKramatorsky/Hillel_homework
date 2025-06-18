import { useRouteError } from "react-router-dom";

const NotFound = () => {
	const error = useRouteError();

	return (
		<div className="text-center mt-5">
			<h1 className="text-danger">404</h1>
			<p>
				{error.status === 404 ? "Сторінку не знайдено." : error.message}
			</p>
		</div>
	);
};

export default NotFound;
