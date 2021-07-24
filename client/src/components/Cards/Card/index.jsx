import styles from './Card.module.scss';

export const Card = () => {
  return (
    <div className={`${styles.card} d-flex flex-column mt-5 align-center`}>
      <img width={260} height={260} src="/img/pizza/1.png" alt="pizza" />
      <span className="mt-10">Чизбургер-пицца</span>
      <div className={`${styles.buttons} mt-20`}>
        <ul className="d-flex flex-wrapp">
          <li className={styles.active}>тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul className="d-flex flex-wrapp mt-10">
          <li className={styles.active}>26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
        </ul>
      </div>
      <div className={`w100p d-flex justify-between mt-20 align-center`}>
        <b>от 395 р.</b>
        <div className={`${styles.addButton} d-flex align-center`}>
          <img className="ml-20" width={12} heigth={12} src="/img/vector.svg" alt="plus" />
          <p className="mr-20 ml-10">Добавить</p>
        </div>
      </div>
    </div>
  );
};
