import { Box } from "@mui/material";
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

      {searchMoviesResponse.isLoading && <p>Loading...</p>}

      {searchMoviesResponse.error && <p>Something went wrong</p>}

      {!searchMoviesResponse.isLoading && !searchMoviesResponse.error && (
        <MoviesTable movies={movies} />
      )}
    </Box>
  );
}
