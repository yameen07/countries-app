import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Country } from "../types";

interface CountryCardProps {
  country: Country;
}

const Card = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 16px;
`;

const Flag = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e0e0e0;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CountryName = styled.h3`
  margin: 0 0 8px;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
`;

const Info = styled.p`
  margin: 4px 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const CountryCard: React.FC<CountryCardProps> = ({ country }) => (
  <Card>
    <CardLink to={`/country/${country.name.common}`}>
      <Flag src={country.flags.png} alt={`${country.name.common} flag`} />
      <CardContent>
        <CountryName>{country.name.common}</CountryName>
        <Info>Population: {country.population.toLocaleString()}</Info>
        <Info>Region: {country.region}</Info>
        <Info>Capital: {country.capital}</Info>
      </CardContent>
    </CardLink>
  </Card>
);

export default CountryCard;
