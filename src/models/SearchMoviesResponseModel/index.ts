import { MovieModel } from "../MovieModel";

export class SearchMoviesResponseModel {
  public readonly page: number;
  public readonly results: MovieModel[];
  public readonly totalPages: number;
  public readonly totalResults: number;

  public constructor(arg: {
    page: number;
    results: MovieModel[];
    totalPages: number;
    totalResults: number;
  }) {
    this.page = arg.page;
    this.results = arg.results;
    this.totalPages = arg.totalPages;
    this.totalResults = arg.totalResults;
  }
}
