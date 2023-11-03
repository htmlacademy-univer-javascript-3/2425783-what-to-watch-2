import React from 'react';
import Footer from '../../components/footer/footer.tsx';
import Logo from '../../components/header/logo/logo.tsx';
import UserBlock from '../../components/header/user-block/user-block.tsx';
import {FilmInfo} from '../../types/films.tsx';
import FilmList from '../../components/film-list/film-list.tsx';

type MyListProps = {
  filmsData: FilmInfo[];
}

export default function MyList({filmsData}: MyListProps): React.JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserBlock/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList data={filmsData}/>
      </section>
      <Footer></Footer>
    </div>
  );
}