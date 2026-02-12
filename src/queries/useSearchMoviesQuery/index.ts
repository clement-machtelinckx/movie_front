import { useQuery } from "@tanstack/react-query";
import { container } from "tsyringe";
import { TmdbApiService } from "../../services/api/tmdb";

const tmdbApiService = container.resolve(TmdbApiService);

export function useSearchMoviesQuery(searchTerm: string, lang: string) {
  const searchMoviesQueryResult = useQuery({
    queryKey: ["searchMovies", searchTerm, lang],
    queryFn: () => tmdbApiService.search(searchTerm, lang),
    enabled: searchTerm !== "",
    staleTime: 1000 * 60 * 30, // 30 minutes,
  });

  return { searchMoviesQueryResult };
}
