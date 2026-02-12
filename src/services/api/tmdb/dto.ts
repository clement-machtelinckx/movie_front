import { z } from "zod";

export const movieDtoSchema = z.object({
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  release_date: z
    .string()
    .transform((date) => {
      if (!date || date.trim() === "") {
        return null;
      }
      const parsedDate = new Date(date);
      return isNaN(parsedDate.getTime()) ? null : parsedDate;
    })
    .nullable(),
  title: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
});
export type MovieDto = z.infer<typeof movieDtoSchema>;

export const searchMoviesResponseDtoSchema = z.object({
  page: z.number(),
  results: z.array(movieDtoSchema),
  total_pages: z.number(),
  total_results: z.number(),
});
export type SearchMoviesResponseDto = z.infer<
  typeof searchMoviesResponseDtoSchema
>;
