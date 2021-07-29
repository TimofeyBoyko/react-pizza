import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { Card } from './Card';
import styles from './Cards.module.scss';

export const Cards = ({ categories }) => {
  const [filteredPizzas, setFilteredPizzas] = useState([]);
  const { pizzas, isLoaded, sortCategory, sortBy } = useSelector(({ pizzas, filters }) => ({
    pizzas: pizzas.items,
    isLoaded: pizzas.isLoaded,
    sortCategory: filters.category,
    sortBy: filters.sortBy,
  }));

  useEffect(() => {
    let filterPizzas = [...pizzas];
    if (sortCategory != null) {
      filterPizzas = filterPizzas.filter((pizza) => pizza.category.includes(sortCategory));
    }
    switch (sortBy) {
      case 'popular':
        return setFilteredPizzas(filterPizzas.sort((a, b) => b.raiting - a.raiting));
      case 'price':
        return setFilteredPizzas(filterPizzas.sort((a, b) => b.cost - a.cost));
      case 'alphabet':
        return setFilteredPizzas(filterPizzas.sort((a, b) => b.title - a.title));
      default:
        return setFilteredPizzas(filterPizzas);
    }
  }, [pizzas, sortBy, sortCategory]);

  return (
    <div className={`${styles.content} d-flex flex-column`}>
      <p className={`${styles.title} mt-30`}>
        {sortCategory != null ? categories[sortCategory] : 'Все пиццы'}
      </p>
      <div className={`${styles.items}`}>
        {isLoaded && filteredPizzas.map((pizza) => <Card key={pizza._id} {...pizza} />)}
      </div>
    </div>
  );
};
