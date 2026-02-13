import { Box, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import { z } from "zod";
import { MovieModel } from "../../models/MovieModel";
import MovieCard from "../../components/MovieCard";
import { i18nMap } from "../../i18n/map";
import { useTranslation } from "react-i18next";
import { useGetMovieQuery } from "../../queries/useGetMovieQuery";

const paramsSchema = z.object({
  movieId: z.coerce.number(),
});

export default function Movie() {
  const params = useParams();
  const { movieId } = paramsSchema.parse(params);

  const location = useLocation();
  const stateMovieModel = MovieModel.validate(location.state.movie);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { getMovieQueryResult } = useGetMovieQuery(movieId, currentLang);
  const fetchedMovieModel = getMovieQueryResult.data;

  const movieModel = fetchedMovieModel ?? stateMovieModel;

  const isNotFound = !movieModel && getMovieQueryResult.isFetched;

  return (
    <Box>
      {movieModel && <MovieCard movie={movieModel} />}
      {isNotFound && (
        <Typography>{t(i18nMap.movie.error.notFound)} !</Typography>
      )}
    </Box>
  );
}
