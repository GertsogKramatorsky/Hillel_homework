import { useTheme } from "../context/ThemeContext";

const ThemeButton = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			type="button"
			className="btn btn-secondary"
			onClick={toggleTheme}>
			{theme === "light" ? "dark" : "light"}
		</button>
	);
};

export default ThemeButton;
