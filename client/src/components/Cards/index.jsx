import { Card } from './Card';
import styles from './Cards.module.scss';

export const Cards = () => {
  return (
    <div className={`${styles.content} d-flex flex-column`}>
      <p className={`${styles.title} mt-30`}>Все пиццы</p>
      <div className="d-flex flex-wrap justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
