import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const initialProps = {
  filmName: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: '2014',
};

root.render(
  <React.StrictMode>
    <App
      filmName={initialProps.filmName}
      genre={initialProps.genre}
      year={initialProps.year}
    />
  </React.StrictMode>
);
