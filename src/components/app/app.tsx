import MainPage from '../../pages/main/main';

type AppProps = {
    filmName: string;
    genre: string;
    year: string | number;
}

export default function App({
  filmName,
  genre,
  year,
}: AppProps) {
  return (
    <MainPage filmName={filmName} genre={genre} year={year} />
  );
}
