import styles from './Filterbar.module.scss';

export const Filterbar = () => {
  return (
    <div className={`${styles.filterbar} d-flex justify-between`}>
      <ul className={`${styles.filter} d-flex`}>
        <li className={`${styles.active}`}>
          <span>Все</span>
        </li>
        <li>
          <span>Мясные</span>
        </li>
        <li>
          <span>Вегетарианская</span>
        </li>
        <li>
          <span>Гриль</span>
        </li>
        <li>
          <span>Острые</span>
        </li>
        <li>
          <span>Закрытые</span>
        </li>
      </ul>
      <div className={`${styles.sort} align-center d-flex`}>
        <img src="/img/arrow-top.svg" alt="arrow" />
        <p className="ml-5">Сортировка по:</p>
        <span className="ml-15">популярности</span>
        <div style={{ display: 'none' }} className={`${styles.popup}`}>
          <ul>
            <li className={styles.active}>популярности</li>
            <li>по цене</li>
            <li>по алфавиту</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
