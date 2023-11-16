export interface BreadcrumbsFilm {
  id: string;
  title: string;
}

export interface FilmInfo {
  id: string;
  title: string;
  genre: string;
  previewImage: string;
  previewVideoLink: string;
  year: string | number;
  posterImage: string;
  backgroundImage: string;
  backgroundColor?: string;
  videoLink: string;
  description: string;
  director: string;
  starring: string[];
  rating: number;
  scoreCount: number;
  runTime: number;
  isFavorite: boolean;
}

export interface FilmPreview {
  id: string;
  name: string;
  genre: string;
  previewImage: string;
  previewVideoLink: string;
}

export interface FilmPromo extends FilmPreview {
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  released: number;
  isFavorite: boolean;
}

export interface ReviewFilm {
  id: string;
  text: string;
  score: string;
  name: string;
  date: string;
}

export interface GenresFilm {
  id: string;
  name: string;
  slug: string;
}
