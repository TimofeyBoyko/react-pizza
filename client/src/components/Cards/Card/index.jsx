import { useState, useEffect } from 'react';
import styles from './Card.module.scss';

export const Card = ({ _id, title, imgUrl, cost, sizes, types, addItemInCart, cart }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [currentCost, setCurrentCost] = useState(cost);
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    if (cart.some((obj) => obj.pizzaId === _id)) {
      let count = 0;
      cart
        .filter((obj) => obj.pizzaId === _id)
        .forEach((item) => {
          count = count + item.count;
        });
      setCurrentCount(count);
    }
  }, [_id, cart]);

  useEffect(() => {
    const newCost =
      cost + cost * sizes[activeSize].coefficient + cost * types[activeType].coefficient;
    setCurrentCost(Math.round(newCost));
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
                  onClick={() => setActiveType(index)}
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
                  onClick={() => setActiveSize(index)}
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
        <div
          onClick={() =>
            addItemInCart({
              pizzaId: _id,
              title,
              cost,
              imgUrl,
              size: sizes[activeSize],
              type: types[activeType],
            })
          }
          className={`${styles.addButton} d-flex align-center`}>
          <img className="ml-20" width={12} heigth={12} src="/img/vector.svg" alt="plus" />
          <p className="mr-20 ml-10 d-flex align-center">
            Добавить {currentCount > 0 && <span className="ml-10">{currentCount}</span>}
          </p>
        </div>
      </div>
    </div>
  );
};
