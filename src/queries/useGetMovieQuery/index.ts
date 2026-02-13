import { useQuery } from "@tanstack/react-query";
import { container } from "tsyringe";
import { TmdbApiService } from "../../services/api/tmdb";

const tmdbApiService = container.resolve(TmdbApiService);

export function useGetMovieQuery(id: number, lang: string) {
  const getMovieQueryResult = useQuery({
    queryKey: ["movie", id, lang],
    queryFn: () => tmdbApiService.getMovie(id, lang),
    staleTime: 1000 * 60 * 30, // 30 minutes,
  });

  return { getMovieQueryResult };
}
