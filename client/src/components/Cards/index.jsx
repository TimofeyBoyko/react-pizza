import { Card } from './Card';
import styles from './Cards.module.scss';

export const Cards = ({ pizza }) => {
  return (
    <div className={`${styles.content} d-flex flex-column`}>
      <p className={`${styles.title} mt-30`}>Все пиццы</p>
      <div className="d-flex flex-wrap justify-between">
        {pizza && pizza.map((item) => <Card key={item._id} {...item} />)}
      </div>
    </div>
  );
};
