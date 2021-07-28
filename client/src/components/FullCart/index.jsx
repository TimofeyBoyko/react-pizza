import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { CartItem } from './CartItem';
import styles from './FullCart.module.scss';
import { clearCart } from '../../redux/actions/cart';

export const FullCart = () => {
  const dispatch = useDispatch();

  const { cart, totalCount, totalCost } = useSelector(({ cart }) => ({
    cart: cart.items,
    totalCount: cart.totalCount,
    totalCost: cart.totalCost,
  }));

  return (
    <div className={`${styles.fullCart} pt-20 d-flex align-center justify-center flex-column`}>
      <div className="d-flex align-center justify-between flex-row">
        <div className="d-flex align-center">
          <img width={29} height={29} src="/img/cart.png" alt="cart" />
          <h4 className="ml-10">Корзина</h4>
        </div>
        <div
          onClick={() => dispatch(clearCart())}
          className={`${styles.clear} d-flex align-center justify-end flex-row ml-20`}>
          <img className="mr-10" width={20} heigth={20} src="/img/clear-cart.png" alt="clear" />
          <span>Очистить корзину</span>
        </div>
      </div>
      <div>{cart && cart.map((item) => <CartItem key={item._id} item={item} cart={cart} />)}</div>
      <div className={`${styles.count} d-flex align-center flex-row justify-between`}>
        <div className="d-flex align-center flex-row">
          <p>
            Всего пицц: <b>{totalCount} шт.</b>
          </p>
        </div>
        <div className="d-flex align-center flex-row justify-end">
          <p>Сумма заказа: </p>
          <span className="ml-5">{totalCost} ₽ </span>
        </div>
      </div>
      <div className={`${styles.buttons} d-flex align-center justify-between flex-row`}>
        <Link to="/">
          <div className="d-flex align-center flex-row">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 13L1 6.93015L6.86175 1"
                stroke="#D3D3D3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="ml-10">Вернуться назад</p>
          </div>
        </Link>

        <div
          onClick={() => dispatch(clearCart())}
          className="d-flex align-center flex-row justify-end">
          <p>Оплатить сейчас</p>
        </div>
      </div>
    </div>
  );
};
