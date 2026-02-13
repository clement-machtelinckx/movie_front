import { z } from "zod";

export class MovieModel {
  private static readonly schema = z.object({
    id: z.number(),
    originalLanguage: z.string(),
    originalTitle: z.string(),
    overview: z.string(),
    popularity: z.number(),
    posterPath: z.string().nullable(),
    releaseDate: z.date(),
    title: z.string(),
    voteAverage: z.number(),
    voteCount: z.number(),
  });

  public readonly id: number;
  public readonly originalLanguage: string;
  public readonly originalTitle: string;
  public readonly overview: string;
  public readonly popularity: number;
  public readonly posterPath: string | null;
  public readonly releaseDate: Date;
  public readonly title: string;
  public readonly voteAverage: number;
  public readonly voteCount: number;

  public constructor(arg: z.infer<typeof MovieModel.schema>) {
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

  // Static method to validate the object and return a MovieModel
  public static validate(obj: unknown): MovieModel {
    const movie = this.schema.parse(obj);
    return new MovieModel(movie);
  }
  // Formats the release date based on a lang
  public getFormattedReleaseDate(lang: string): string {
    return this.releaseDate
      ? this.releaseDate.toLocaleDateString(lang)
      : "N/A";
  }

  
}
