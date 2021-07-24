import styles from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <div className={`${styles.header} d-flex justify-between align-center`}>
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt="logo" />
          <div className={styles.text}>
            <span>react pizza</span>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className={`${styles.cart} d-flex align-center`}>
          <p className="ml-15 mr-5">520 ₽</p>
          <div></div>
          <img className="ml-5" width={25} height={20} src="/img/white-cart.svg" alt="cart" />
          <p className="ml-10">3</p>
        </div>
      </div>
      <div className={`${styles.line} mt-40 mb-40`}> </div>
    </>
  );
};
