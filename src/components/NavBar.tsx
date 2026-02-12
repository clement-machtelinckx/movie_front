import { Tab, Tabs } from "@mui/material";
import { useMatch, useNavigate } from "react-router-dom";

export default function NavBar() {
  const isHomePage = !!useMatch("/");
  const isMoviesPage = !!useMatch("/movies/*");

  const value = isHomePage ? 0 : isMoviesPage ? 1 : false;

  const navigate = useNavigate();

  return (
    <Tabs role="navigation" value={value}>
      <Tab
        label="Home"
        component="a"
        aria-selected={isHomePage}
        onClick={() => {
          navigate("/");
        }}
      />

      <Tab
        label="Movies"
        component="a"
        aria-selected={isMoviesPage}
        onClick={() => {
          navigate("/movies");
        }}
      />
    </Tabs>
  );
}
