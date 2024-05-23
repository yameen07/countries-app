import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCountries } from "../api";
import { Country } from "../types";
import styled from "styled-components";

const CountryPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    if (name) {
      fetchCountries(name)
        .then((response) => setCountry(response[0]))
        .catch((error) => console.error("Error fetching country:", error));
    }
  }, [name]);

  if (!country) return <div>Loading...</div>;

  return (
    <DetailContainer>
      <BackButton>
        <Link to="/">Back</Link>
      </BackButton>
      <DetailContent>
        <Flag>
          <img src={country.flags.svg} alt={`${country.name.common} flag`} />
        </Flag>
        <CountryInfo>
          <h1>{country.name.common}</h1>
          <InfoGroup>
            <div>
              <p>
                <strong>Native Name:</strong>{" "}
                {Object.values(country.name.nativeName)[0].common}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Subregion:</strong> {country.subregion}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital.join(", ")}
              </p>
            </div>
            <div>
              <p>
                <strong>Top Level Domain:</strong> {country.tld.join(", ")}
              </p>
              <p>
                <strong>Currencies:</strong>{" "}
                {Object.values(country.currencies)
                  .map((c) => c.name)
                  .join(", ")}
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {Object.values(country.languages).join(", ")}
              </p>
            </div>
          </InfoGroup>
          {country.borders && (
            <Borders>
              <strong>Border Countries:</strong>
              <BorderList>
                {country.borders.map((border) => (
                  <li key={border}>
                    <Link to={`/country/${border}`}>{border}</Link>
                  </li>
                ))}
              </BorderList>
            </Borders>
          )}
        </CountryInfo>
      </DetailContent>
    </DetailContainer>
  );
};

export default CountryPage;

const DetailContainer = styled.div`
  padding: 2rem;
`;

const BackButton = styled.div`
  margin-bottom: 2rem;
  a {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background 0.3s;

    &:hover {
      background: ${({ theme }) => theme.toggleBorder};
    }
  }
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const Flag = styled.div`
  img {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
  }
`;

const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    font-size: 2rem;
  }
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
  }

  div {
    p {
      margin: 0.5rem 0;
      strong {
        font-weight: bold;
      }
    }
  }
`;

const Borders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  strong {
    font-weight: bold;
  }
`;

const BorderList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  li {
    list-style: none;
    a {
      padding: 0.5rem 1rem;
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
      text-decoration: none;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: background 0.3s;

      &:hover {
        background: ${({ theme }) => theme.toggleBorder};
      }
    }
  }
`;
