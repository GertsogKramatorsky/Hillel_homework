import "./App.css";
import ClearData from "./components/ClearButton";
import Input from "./components/Input";

import Content from "./components/Content";

function App() {
	return (
		<div className="container bg-dark">
			<Input />
			<Content />
			<ClearData />
		</div>
	);
}

export default App;
