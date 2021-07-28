import { useSelector } from 'react-redux';

import { Card } from './Card';
import styles from './Cards.module.scss';

export const Cards = () => {
  // TODO sort and filter
  const { pizzas, isLoaded, sortCategory, sortBy } = useSelector(({ pizzas, filters }) => ({
    pizzas: pizzas.items,
    isLoaded: pizzas.isLoaded,
    sortCategory: filters.category,
    sortBy: filters.sortBy,
  }));

  return (
    <div className={`${styles.content} d-flex flex-column`}>
      <p className={`${styles.title} mt-30`}>Все пиццы</p>
      <div className="d-flex flex-wrap justify-between">
        {isLoaded && pizzas.map((pizza) => <Card key={pizza._id} {...pizza} />)}
      </div>
    </div>
  );
};
