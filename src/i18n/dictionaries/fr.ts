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
      table: {
        id: "ID",
        title: "Titre",
        voteAverage: "Évaluation",
        voteCount: "Nb de votes",
        popularity: "Popularité",
        releaseDate: "Date de sortie",
      },
    },
    movie: {
      card: {
        releaseDate: "Date de sortie",
        originalTitle: "Titre original",
        originalLanguage: "Langue originale",
        popularity: "Popularité",
        voteAverage: "Évaluation",
        voteCount: "Votes",
      },
      error: {
        notFound: "Film non trouvé",
      },
    },
  },
};
