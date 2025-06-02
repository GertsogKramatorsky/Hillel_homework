function Input() {
	return (
		<div>
			<h1 className="text-center mb-4">Try it now!</h1>
			<div className="input-group flex-nowrap">
				<span className="input-group-text" id="addon-wrapping">
					https://www.swapi.tech/api/
				</span>
				<input
					type="text"
					className="form-control"
					aria-label="Username"
					aria-describedby="addon-wrapping"
					placeholder="...try people/1, or select from below"></input>
				<button
					className="btn btn-secondary"
					type="button"
					id="button-addon2">
					request
				</button>
			</div>
		</div>
	);
}

export default Input;
