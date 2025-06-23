import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchInfoData } from "../redux/infoSlice";

function Input() {
	const [endpoint, setEndpoint] = useState("");
	const dispatch = useDispatch();

	const handleRequest = () => {
		if (endpoint.trim()) {
			dispatch(fetchInfoData(endpoint));
		}
	};
	return (
		<div>
			<h1 className="text-center mb-4">Try it now!</h1>
			<div className="input-group">
				<span className="input-group-text" id="addon-wrapping">
					https://www.swapi.tech/api/
				</span>
				<input
					type="text"
					className="form-control"
					aria-label="Username"
					aria-describedby="addon-wrapping"
					placeholder="...try people/1, or select from below"
					value={endpoint}
					onChange={(e) => setEndpoint(e.target.value)}></input>
				<button
					className="btn btn-secondary"
					type="button"
					id="button-addon2"
					onClick={handleRequest}>
					request
				</button>
			</div>
		</div>
	);
}

export default Input;
