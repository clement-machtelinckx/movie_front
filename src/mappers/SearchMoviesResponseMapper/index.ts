import { container, singleton } from "tsyringe";
import { SearchMoviesResponseDto } from "../../services/api/tmdb/dto";
import { SearchMoviesResponseModel } from "../../models/SearchMoviesResponseModel";
import { MovieMapper } from "../MovieMapper";
import { MovieModel } from "../../models/MovieModel";

@singleton()
export class SearchMoviesResponseMapper {
  public mapDtoToModel(
    dto: SearchMoviesResponseDto
  ): SearchMoviesResponseModel {
    return new SearchMoviesResponseModel({
      page: dto.page,
      results: dto.results
        .map((result) => {
          try {
            return container.resolve(MovieMapper).mapDtoToModel(result);
          } catch {
            return null;
          }
        })
        .filter((m): m is MovieModel => m !== null),
      totalPages: dto.total_pages,
      totalResults: dto.total_results,
    });
  }
}
