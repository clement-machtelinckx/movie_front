import { container, singleton } from "tsyringe";
import { movieDtoSchema, searchMoviesResponseDtoSchema } from "./dto";
import { EnvService } from "../../envService";
import { SearchMoviesResponseMapper } from "../../../mappers/SearchMoviesResponseMapper";
import { SearchMoviesResponseModel } from "../../../models/SearchMoviesResponseModel";
import { MovieMapper } from "../../../mappers/MovieMapper";
import { MovieModel } from "../../../models/MovieModel";



@singleton()
export class TmdbApiService {
  private readonly baseUrl = "https://api.themoviedb.org/3";
  private readonly apiKey = import.meta.env.VITE_TMDB_API_KEY;
  private readonly searchMoviesResponseMapper = container.resolve(
    SearchMoviesResponseMapper
);

  private readonly baseUrl = "https://api.themoviedb.org/3";
  private readonly imageUrlBase = "https://image.tmdb.org/t/p/w500";
  public readonly fallbackImageUrl = `/images/movie-fallback.png`;


  public search(
    term: string,
    lang: string
  ): Promise<SearchMoviesResponseModel> {
    return fetch(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=${lang}&query=${term}&page=1&include_adult=false`
    )
      .then((r) => r.json())
      .then((json) => searchMoviesResponseDtoSchema.parse(json))
      .then((dto) => this.searchMoviesResponseMapper.mapDtoToModel(dto));
  }


  
  public getPosterUrl(path: string | null): string {
    if (!path) {
      return this.fallbackImageUrl;
    }

    const isPathStartingWithSlash = path?.startsWith("/");
    const pathWithoutStartingSlash = isPathStartingWithSlash
      ? path.substring(1)
      : path;

    return `${this.imageUrlBase}/${pathWithoutStartingSlash}`;
  }


  
  public async getMovie(id: number, lang: string): Promise<MovieModel | null> {
    return fetch(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=${lang}`
    )
      .then((r) => {
        if (r.status === 404) {
          return null; // Return null if 404 is encountered
        }
        return r.json(); // Proceed with JSON parsing for other status codes
      })
      .then((json) => {
        if (json === null) return null; // Return null if 404 is encountered

        return movieDtoSchema
          .parseAsync(json)
          .then((dto) => this.movieMapper.mapDtoToModel(dto));
      });
  }
}
