type ShowMoreBtnProps = {
  clickHandler: () => void;
}
export default function ShowMoreBtn({clickHandler}: ShowMoreBtnProps) {
  return(
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={clickHandler}>
          Show more
      </button>
    </div>
  );
}
