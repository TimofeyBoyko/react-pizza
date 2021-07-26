import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <div className={`${styles.header} d-flex justify-between align-center`}>
        <div className="d-flex align-center">
          <Link to="/">
            <img width={40} height={40} src="/img/logo.svg" alt="logo" />
          </Link>
          <div className={styles.text}>
            <span>react pizza</span>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>

        <Route path="/" exact>
          <Link to="/cart">
            <div className={`${styles.cart} d-flex align-center`}>
              <p className="ml-20 mr-10">520 ₽</p>
              <div></div>
              <img className="ml-10" width={20} height={15} src="/img/white-cart.svg" alt="cart" />
              <p className="ml-10">3</p>
            </div>
          </Link>
        </Route>
      </div>
      <div className={`${styles.line} mt-40 mb-40`}> </div>
    </>
  );
};
