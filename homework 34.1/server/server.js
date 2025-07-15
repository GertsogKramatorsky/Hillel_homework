const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, "data", "db.json");

function getDbData() {
	try {
		const rawData = fs.readFileSync(dbPath, "utf-8");
		return JSON.parse(rawData);
	} catch (error) {
		console.error("DB read error:", error);
		return null;
	}
}

app.get("/api/hotels", (req, res) => {
	const data = getDbData();
	if (!data) return res.status(500).json({ error: "DB error" });

	const { city } = req.query;

	if (!city) {
		return res.status(400).json({ error: "Missing city query parameter" });
	}

	const filtered = data.hotels.filter(
		(hotel) =>
			hotel.city &&
			hotel.city.toLowerCase().trim() === city.toLowerCase().trim()
	);

	if (filtered.length === 0) {
		return res.status(404).json({ error: `No hotels found in ${city}` });
	}

	return res.json(filtered);
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
