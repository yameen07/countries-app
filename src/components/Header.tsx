import React from "react";
import styled from "styled-components";

interface HeaderProps {
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  return (
    <StyledHeader>
      <Container>
        <Title>Where in the world?</Title>
        <ThemeSwitcher onClick={toggleTheme}>
          <i className="fas fa-moon"></i>
          <span>Dark Mode</span>
        </ThemeSwitcher>
      </Container>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.body};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
`;

const ThemeSwitcher = styled.button`
  background: none;
  border: none;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  i {
    margin-right: 0.5rem;
  }
`;
