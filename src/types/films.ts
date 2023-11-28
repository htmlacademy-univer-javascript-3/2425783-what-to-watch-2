export interface BreadcrumbsFilm {
  id: string;
  title: string;
}

export interface FilmInfo {
  // id: string;
  // title: string;
  // genre: string;
  // previewImage: string;
  // previewVideoLink: string;
  // year: string | number;
  // posterImage: string;
  // backgroundImage: string;
  // backgroundColor?: string; 11
  // videoLink: string;
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

export interface FilmDetails extends FilmPromo, FilmPreview {
  backgroundColor: string;
  description: string;
  director: string;
  starring: string[];
  rating: number;
  scoreCount: number;
  runTime: number;
  isFavorite: boolean;
}
export interface ReviewFilm {
  id: string;
  comment: string;
  rating: string;
  user: string;
  date: string;
}
