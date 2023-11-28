type ShowMoreBtnProps = {
  handleBtnClick: () => void;
}
export default function ShowMoreBtn({handleBtnClick}: ShowMoreBtnProps) {
  return(
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleBtnClick}>
          Show more
      </button>
    </div>
  );
}
