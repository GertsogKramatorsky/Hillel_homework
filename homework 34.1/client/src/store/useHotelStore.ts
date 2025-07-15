import { create } from "zustand";

export type Hotel = {
	id: number;
	name: string;
	address: string;
	city: string;
	state: string | null;
	country_code: string;
	hotel_rating: number;
	phone_number: string;
	website: string | null;
};

type HotelStore = {
	hotels: Hotel[];
	error: string | null;
	fetchHotelsByDestination: (destination: string) => Promise<void>;
};

const API_URL = import.meta.env.VITE_API_URL;
export const useHotelStore = create<HotelStore>((set) => ({
	hotels: [],
	error: null,
	fetchHotelsByDestination: async (destination) => {
		try {
			const response = await fetch(
				`${API_URL}/api/hotels?city=${destination}`
			);

			if (!response.ok) {
				const errorData = await response.json();
				set({ hotels: [], error: errorData.error || "Unknown error" });
				return;
			}

			const data = await response.json();
			if (!data.length) {
				set({ hotels: [], error: "No hotels found for this city." });
				return;
			}

			set({ hotels: data, error: null });
		} catch {
			set({ hotels: [], error: "Failed to fetch hotels." });
		}
	},
}));
