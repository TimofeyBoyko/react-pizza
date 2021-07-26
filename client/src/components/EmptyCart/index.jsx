import { Link } from 'react-router-dom';
import styles from './EmptyCart.module.scss';

export const EmptyCart = () => {
  return (
    <div
      className={`${styles.emptyCart} d-flex align-center justify-center flex-column pt-20 pb-50 `}>
      <h3 className="m-5">
        Корзина пустая
        <img width={32} heigth={32} className="ml-20" src="/img/smile.svg" alt="smile" />
      </h3>
      <p className="m-5 text-center">
        Вероятнее всего, Вы не заказывали ещё пиццу. <br />
        Для того, чтобы заказать пиццу перейдите на главную страницу.
      </p>
      <img
        className="mt-50 mb-50"
        width={300}
        height={255}
        src="/img/empty-cart.png"
        alt="emptycart"
      />
      <Link to="/">
        <div className="d-flex align-center justify-center">Вернуться назад</div>
      </Link>
    </div>
  );
};
