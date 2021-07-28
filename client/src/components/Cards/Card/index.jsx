import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addCartItem } from '../../../redux/actions/cart';

import styles from './Card.module.scss';

export const Card = ({ _id, title, imgUrl, cost, sizes, types }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [currentCost, setCurrentCost] = useState(cost);
  const [currentCount, setCurrentCount] = useState(0);

  const dispatch = useDispatch();

  const { cart } = useSelector(({ cart }) => ({
    cart: cart.items,
  }));

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
            dispatch(
              addCartItem(
                {
                  pizzaId: _id,
                  title,
                  cost,
                  imgUrl,
                  size: sizes[activeSize],
                  type: types[activeType],
                },
                cart,
              ),
            )
          }
          className={`${styles.addButton} d-flex align-center`}>
          <svg
            className="ml-20"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#EB5A1E"
            />
          </svg>

          <p className="mr-20 ml-10 d-flex align-center">
            Добавить {currentCount > 0 && <span className="ml-10">{currentCount}</span>}
          </p>
        </div>
      </div>
    </div>
  );
};
