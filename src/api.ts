import axios from "axios";
import { Country } from "./types";

const API_URL = "https://restcountries.com/v3.1";

export const fetchCountryByName = async (name: string) => {
  const response = await axios.get<Country[]>(`${API_URL}/all`);

  return response.data.filter((country) => country.name.common === name);
};

export const fetchAllCountries = async () => {
  const response = await axios.get<Country[]>(`${API_URL}/all`);
  return response.data;
};
