import style from './Pagination.module.scss'
import chevron from '../../assets/icons/chevron.png'

export function Pagination({pageCount, pageBackward, pageForward}) {
  return (
    <div className={style.paginationStyling}>
      <button onClick={() => pageBackward()}>
        <img src={chevron} alt='pageBackButton' />
      </button>
      <span>{pageCount}</span>
      <button onClick={() => pageForward()}>
        <img src={chevron} alt='pageBackButton' />
      </button>
    </div>
  );
}
