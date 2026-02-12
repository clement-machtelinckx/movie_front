import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import classes from "../../classes/DefaultTemplate.module.css";
import DefaultErrorBoundary from "../../components/DefaultErrorBoundary";

export default function DefaultTemplate() {

  const location = useLocation();
  const route = location.pathname;

  return (
    <Box className={classes.root}>
      <header>
        <Header />
      </header>
      <main>
        <DefaultErrorBoundary key={route}>
          <Outlet />
        </DefaultErrorBoundary>
      </main>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
}
