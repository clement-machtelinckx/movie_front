import { en } from "./en";

export const fr: typeof en = {
  translation: {
    error: { defaultMessage: "Désolé, une erreur est survenue" },
    header: {
      title: "Mon application de films",
      description:
        "Recherchez et parcourez les films de la base de données TMDB",
      nav: {
        home: "Accueil",
        movies: "Films",
      },
    },
    movies: {
      searchBar: {
        placeholder: "Rechercher des films...",
      },
    },
  },
};
