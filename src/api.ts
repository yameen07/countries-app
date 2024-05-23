import axios from "axios";
import { Country } from "./types";

const API_URL = "https://restcountries.com/v3.1";

export const fetchCountries = async (name?: string) => {
  const response = await axios.get<Country[]>(`${API_URL}/all`);
  return name
    ? response.data.filter((country) => country.name.common === name)
    : response.data;
};
