export class MovieModel {
  public readonly id: number;
  public readonly originalLanguage: string;
  public readonly originalTitle: string;
  public readonly overview: string;
  public readonly popularity: number;
  public readonly posterPath: string | null;
  public readonly releaseDate: Date | null;
  public readonly title: string;
  public readonly voteAverage: number;
  public readonly voteCount: number;

  public constructor(arg: {
    id: number;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    posterPath: string | null;
    releaseDate: Date | null;
    title: string;
    voteAverage: number;
    voteCount: number;
  }) {
    this.id = arg.id;
    this.originalLanguage = arg.originalLanguage;
    this.originalTitle = arg.originalTitle;
    this.overview = arg.overview;
    this.popularity = arg.popularity;
    this.posterPath = arg.posterPath;
    this.releaseDate = arg.releaseDate;
    this.title = arg.title;
    this.voteAverage = arg.voteAverage;
    this.voteCount = arg.voteCount;
  }

  // Formats the release date based on a lang
  public getFormattedReleaseDate(lang: string): string {
    return this.releaseDate
      ? this.releaseDate.toLocaleDateString(lang)
      : "N/A";
  }
}
