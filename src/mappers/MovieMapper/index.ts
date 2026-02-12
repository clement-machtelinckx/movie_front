import { singleton } from "tsyringe";
import { MovieModel } from "../../models/MovieModel";
import { MovieDto } from "../../services/api/tmdb/dto";

@singleton()
export class MovieMapper {
  public mapDtoToModel(dto: MovieDto): MovieModel {
    return new MovieModel({
      id: dto.id,
      originalLanguage: dto.original_language,
      originalTitle: dto.original_title,
      overview: dto.overview,
      popularity: dto.popularity,
      posterPath: dto.poster_path ? dto.poster_path : null, // Handle null posterPath
      releaseDate: dto.release_date,
      title: dto.title,
      voteAverage: dto.vote_average,
      voteCount: dto.vote_count,
    });
  }
}
