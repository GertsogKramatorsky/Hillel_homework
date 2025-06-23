import { useDispatch } from "react-redux";
import { clearInfo } from "../redux/infoSlice";

function ClearData() {
	const dispatch = useDispatch();

	const handleClear = () => {
		dispatch(clearInfo());
	};
	return (
		<>
			<button className="btn btn-secondary mt-3" onClick={handleClear}>
				Clear
			</button>
		</>
	);
}

export default ClearData;
