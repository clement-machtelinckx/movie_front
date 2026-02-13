import {
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { MovieModel } from "../models/MovieModel";
import classes from "../classes/MovieCard.module.css";
import { useState } from "react";
import { i18nMap } from "../i18n/map";
import { container } from "tsyringe";
import { TmdbApiService } from "../services/api/tmdb";

type Props = {
  movie: MovieModel;
};

export default function MovieCard({ movie }: Props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const tmdbApiService = container.resolve(TmdbApiService);
  const [moviePosterUrl, setMoviePosterUrl] = useState<string>(
    tmdbApiService.getPosterUrl(movie.posterPath)
  );

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        className={classes.media}
        image={moviePosterUrl}
        alt={movie.title}
        onError={() => setMoviePosterUrl(tmdbApiService.fallbackImageUrl)}
      />

      <CardContent>
        <Rating
          value={movie.voteAverage}
          precision={0.25}
          max={10}
          size="large"
          readOnly
        />

        <Typography gutterBottom variant="h5" component="div" mt={3}>
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.overview}
        </Typography>

        <Typography variant="body2" color="text.secondary" mt={3}>
          {t(i18nMap.movie.card.releaseDate)} :{" "}
          {movie.getFormattedReleaseDate(currentLang)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t(i18nMap.movie.card.originalTitle)} : {movie.originalTitle} -{" "}
          {t(i18nMap.movie.card.originalLanguage)} : {movie.originalLanguage}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t(i18nMap.movie.card.popularity)} : {movie.popularity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t(i18nMap.movie.card.voteAverage)} : {movie.voteAverage}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t(i18nMap.movie.card.voteCount)} : {movie.voteCount}
        </Typography>
      </CardContent>
    </Card>
  );
}
