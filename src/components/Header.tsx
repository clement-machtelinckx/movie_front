import { Box, Typography } from "@mui/material";
import classes from "../classes/header.module.css";
import NavBar from "./NavBar";
import LanguageSelector from "./LanguageSelector";
import { i18nMap } from "../i18n/map";
import { useTranslation } from "react-i18next";



export default function Header() {
  const { t } = useTranslation();
  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Typography component="h1" variant="h5">
          {t(i18nMap.header.title)}
        </Typography>

        <Typography variant="body2">{t(i18nMap.header.description)}</Typography>

        <NavBar />
      </Box>

      <Box>
        <LanguageSelector />
      </Box>
    </Box>
  );
}