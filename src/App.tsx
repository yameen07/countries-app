import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import CountryDetail from "./components/CountryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/country/:name",
    element: <CountryDetail />,
  },
]);

const App: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <RouterProvider router={router} />
      </>
    </ThemeProvider>
  );
};

export default App;
