import { Box, CircularProgress, Alert } from "@mui/material";
import SearchBar from "../../components/SearchBar";
import { i18nMap } from "../../i18n/map";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import useCurrentLang from "../../i18n/hooks/useCurrentLang";
import { useSearchMoviesQuery } from "../../queries/useSearchMoviesQuery";
import MoviesTable from "../../components/MoviesTable";
import { MovieModel } from "../../models/MovieModel";

export default function Movies() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const currentLang = useCurrentLang();
  const { searchMoviesQueryResult: searchMoviesResponse } =
    useSearchMoviesQuery(searchTerm, currentLang);

  // Filter out any undefined or null values from the results
  const movies =
    searchMoviesResponse.data?.results?.filter(Boolean) ?? ([] as MovieModel[]);

  return (
    <Box>
      <SearchBar
        placeholder={t(i18nMap.movies.searchBar.placeholder)}
        onSearch={setSearchTerm}
      />

      {searchMoviesResponse.isLoading && (
        <Box display="flex" justifyContent="center" padding={4}>
          <CircularProgress />
        </Box>
      )}

      {searchMoviesResponse.error && (
        <Box padding={2}>
          <Alert severity="error">
            Failed to load movies. Please try again later.
          </Alert>
        </Box>
      )}

      {!searchMoviesResponse.isLoading && !searchMoviesResponse.error && (
        <MoviesTable movies={movies} />
      )}
    </Box>
  );
}
