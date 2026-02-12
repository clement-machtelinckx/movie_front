import { container, singleton } from "tsyringe";
import { SearchMoviesResponseDto } from "../../services/api/tmdb/dto";
import { SearchMoviesResponseModel } from "../../models/SearchMoviesResponseModel";
import { MovieMapper } from "../MovieMapper";

@singleton()
export class SearchMoviesResponseMapper {
  public mapDtoToModel(
    dto: SearchMoviesResponseDto
  ): SearchMoviesResponseModel {
    return new SearchMoviesResponseModel({
      page: dto.page,
      results: dto.results.map((result) =>
        container.resolve(MovieMapper).mapDtoToModel(result)
      ),
      totalPages: dto.total_pages,
      totalResults: dto.total_results,
    });
  }
}
