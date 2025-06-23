import { useSelector } from "react-redux";

function Content() {
	const { result, loading, error } = useSelector((state) => state.info);

	if (loading) return <p className="text-light mt-3">Loading...</p>;
	if (error) return <p className="text-danger mt-3">{error}</p>;
	if (!result) return null;
	return (
		<div>
			<h3 className="text-left mb-4">Result</h3>
			<div className="json-content-outer-container">
				<div className="json-content-inner-container">
					<pre className="json-content-text">
						{JSON.stringify(result, null, 2)}
					</pre>
				</div>
			</div>
		</div>
	);
}

export default Content;
