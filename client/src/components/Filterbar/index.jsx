import { useState, useEffect, useRef } from 'react';
import styles from './Filterbar.module.scss';

export const Filterbar = ({ filterTypes, sortTypes }) => {
  const [activeFilterType, setActiveFilterType] = useState(0);
  const [activeSortType, setActiveSortType] = useState(0);
  const [showSortPopup, setShowSortPopup] = useState(false);
  const sortRef = useRef();

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
        {filterTypes &&
          filterTypes.map((type, index) => (
            <li
              key={`${type}_${index}`}
              onClick={() => setActiveFilterType(index)}
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
          {sortTypes && sortTypes[activeSortType]}
        </span>
        {showSortPopup && (
          <div className={`${styles.popup}`}>
            <ul>
              {sortTypes &&
                sortTypes.map((item, index) => (
                  <li
                    onClick={() => setActiveSortType(index)}
                    key={`${item}_${index}`}
                    className={activeSortType === index ? styles.activeSort : ''}>
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
