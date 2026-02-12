import { container, singleton } from "tsyringe";
import { searchMoviesResponseDtoSchema } from "./dto";
import { EnvService } from "../../envService";
import { SearchMoviesResponseMapper } from "../../../mappers/SearchMoviesResponseMapper";
import { SearchMoviesResponseModel } from "../../../models/SearchMoviesResponseModel";



@singleton()
export class TmdbApiService {
  private readonly baseUrl = "https://api.themoviedb.org/3";
  private readonly apiKey = import.meta.env.VITE_TMDB_API_KEY;
  private readonly searchMoviesResponseMapper = container.resolve(
    SearchMoviesResponseMapper
);
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
}
