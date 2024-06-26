import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchCountries } from "../api";
import CountryCard from "./CountryCard";
import { Country } from "../types";
import SearchFilter from "./SearchFilter";

const CountryListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetchCountries().then((response) => {
      setCountries(response);
      setFilteredCountries(response);
    });
  }, []);

  useEffect(() => {
    let filtered = countries;

    if (searchTerm) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (region) {
      filtered = filtered.filter((country) => country.region === region);
    }

    setFilteredCountries(filtered);
  }, [searchTerm, region, countries]);

  return (
    <>
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        region={region}
        setRegion={setRegion}
      />
      <CountryListContainer>
        {filteredCountries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </CountryListContainer>
    </>
  );
};

export default CountryList;
