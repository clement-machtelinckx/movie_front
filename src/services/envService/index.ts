import { singleton } from "tsyringe";
import { z } from "zod";


@singleton()
export class EnvService {
  private readonly schema = z.object({
    VITE_TMDB_API_KEY: z.string(),
  });

  public get vars(): z.infer<typeof this.schema> {
    return this.schema.parse(import.meta.env);
  }

  public constructor() {
    this.schema.parse(import.meta.env);
  }
}
