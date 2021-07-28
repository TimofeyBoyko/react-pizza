import { useState, useEffect, useRef, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortBy } from '../../redux/actions/filters';

import styles from './Filterbar.module.scss';

export const Filterbar = memo(({ filterTypes, sortTypes }) => {
  const dispatch = useDispatch();

  const [showSortPopup, setShowSortPopup] = useState(false);
  const sortRef = useRef();

  const { activeFilterType, activeSortType } = useSelector(({ filters }) => ({
    activeFilterType: filters.category,
    activeSortType: filters.sortBy,
  }));

  const toggleShowSortPopup = () => {
    setShowSortPopup((prev) => !prev);
  };

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setShowSortPopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className={`${styles.filterbar} d-flex justify-between`}>
      <ul className={`${styles.filter} d-flex`}>
        <li
          onClick={() => dispatch(setCategory(null))}
          className={activeFilterType === null ? `${styles.activeFilter}` : ''}>
          <span>Все</span>
        </li>
        {filterTypes &&
          filterTypes.map((type, index) => (
            <li
              key={`${type}_${index}`}
              onClick={() => dispatch(setCategory(index))}
              className={activeFilterType === index ? `${styles.activeFilter}` : ''}>
              <span>{type}</span>
            </li>
          ))}
      </ul>
      <div className={`${styles.sort} align-center d-flex`}>
        <img
          className={showSortPopup ? `${styles.transofrm}` : ''}
          src="/img/arrow-top.svg"
          alt="arrow"
        />
        <p className="ml-5">Сортировка по:</p>
        <span onClick={toggleShowSortPopup} className="ml-15">
          {sortTypes && sortTypes.filter((obj) => obj.type === activeSortType)[0].name}
        </span>
        {showSortPopup && (
          <div className={`${styles.popup}`}>
            <ul>
              {sortTypes &&
                sortTypes.map((item, index) => (
                  <li
                    onClick={() => dispatch(setSortBy(item.type))}
                    key={`${item.type}_${index}`}
                    className={activeSortType === item.type ? styles.activeSort : ''}>
                    {item.name}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
});
