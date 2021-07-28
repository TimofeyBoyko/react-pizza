import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { EmptyCart } from '../components/EmptyCart';
import { FullCart } from '../components/FullCart';
import { fetchCart } from '../redux/actions/cart';

export const Cart = () => {
  const dispatch = useDispatch();
  const { totalCount } = useSelector(({ cart }) => ({ totalCount: cart.totalCount }));

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return <div>{totalCount > 0 ? <FullCart /> : <EmptyCart />}</div>;
};
