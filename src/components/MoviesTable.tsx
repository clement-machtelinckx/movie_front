import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import classes from "../classes/MoviesTable.module.css";
import { MovieModel } from "../models/MovieModel";
import { useTranslation } from "react-i18next";
import { i18nMap } from "../i18n/map";

type Props = {
  movies?: MovieModel[];
};

export default function MoviesTable({ movies = [] }: Props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const navigate = useNavigate();
  const navigateToMovieDetails = (movie: MovieModel) => {
    navigate(`/movies/${movie.id}`, { state: { movie } });
  };

  // Protect against undefined / null values
  const safeMovies = movies.filter(
    (movie): movie is MovieModel => !!movie
  );

  if (safeMovies.length === 0) {
    return (
      <Typography align="center" sx={{ marginTop: 2 }}>
        No movies found
      </Typography>
    );
  }

  return (
<div>
    <h1>fuck </h1>
    <Typography>{safeMovies.map((movie) => movie.title)}</Typography>
    <TableContainer>
      <TableHead>
        <TableRow>
          <TableCell align="center">{t(i18nMap.movies.table.id)}</TableCell>
          <TableCell align="center">{t(i18nMap.movies.table.title)}</TableCell>
          <TableCell align="center">{t(i18nMap.movies.table.voteAverage)}</TableCell>
          <TableCell align="center">{t(i18nMap.movies.table.voteCount)}</TableCell>
          <TableCell align="center">{t(i18nMap.movies.table.popularity)}</TableCell>
          <TableCell align="center">{t(i18nMap.movies.table.releaseDate)}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {safeMovies.map((movie) => (
          <TableRow
            key={movie.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            onClick={() => navigateToMovieDetails(movie)}
          >
            <TableCell align="center">{movie.id}</TableCell>
            <TableCell align="center">{movie.title}</TableCell>
            <TableCell align="center">{movie.voteAverage}</TableCell>
            <TableCell align="center">{movie.voteCount}</TableCell>
            <TableCell align="center">{movie.popularity}</TableCell>
              <TableCell align="center">
                {movie.getFormattedReleaseDate(currentLang)}
              </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
</div>
  );
}
