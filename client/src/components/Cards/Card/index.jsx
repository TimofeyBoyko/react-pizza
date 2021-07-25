import { useState, useEffect } from 'react';
import styles from './Card.module.scss';

export const Card = ({ title, imgUrl, cost, sizes, types }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [currentCost, setCurrentCost] = useState(cost);

  const onChangeActiveType = (index) => {
    setActiveType(index);
  };

  const onChangeActiveSize = (index) => {
    setActiveSize(index);
  };

  useEffect(() => {
    const newCost =
      cost + cost * sizes[activeSize].coefficient + cost * types[activeType].coefficient;
    setCurrentCost(newCost);
  }, [activeType, activeSize, cost, sizes, types]);

  return (
    <div className={`${styles.card} d-flex flex-column mt-5 align-center mb-30`}>
      <img width={260} height={260} src={`/img/pizza/${imgUrl}`} alt="pizza" />
      <span className="mt-10">{title}</span>
      <div className={`${styles.buttons} mt-20`}>
        <ul className="d-flex flex-wrapp">
          {types &&
            types.map((item, index) =>
              item.active ? (
                <li
                  onClick={() => onChangeActiveType(index)}
                  key={item.type}
                  className={activeType === index ? styles.active : ''}>
                  {item.type}
                </li>
              ) : (
                <li key={item.type} className={styles.disabled}>
                  {item.type}
                </li>
              ),
            )}
        </ul>
        <ul className="d-flex flex-wrapp mt-10">
          {sizes &&
            sizes.map((item, index) =>
              item.active ? (
                <li
                  onClick={() => onChangeActiveSize(index)}
                  key={item.size}
                  className={activeSize === index ? styles.active : ''}>
                  {item.size}
                </li>
              ) : (
                <li key={item.size} className={styles.disabled}>
                  {item.size}
                </li>
              ),
            )}
        </ul>
      </div>
      <div className={`w100p d-flex justify-between mt-20 align-center`}>
        <b>{currentCost} р.</b>
        <div className={`${styles.addButton} d-flex align-center`}>
          <img className="ml-20" width={12} heigth={12} src="/img/vector.svg" alt="plus" />
          <p className="mr-20 ml-10">Добавить</p>
        </div>
      </div>
    </div>
  );
};
