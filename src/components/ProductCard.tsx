import React from 'react';
import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import {
  ProductContextProps,
  ProductCardProps,
} from '../interfaces/interfaces';
import { createContext } from 'react';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });
  const { title, img } = product;
  return (
    <Provider value={{ counter, increaseBy, title, img, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          product,
          maxCount: initialValues?.maxCount,
          increaseBy,
          reset,
        })}
        {/* <ProductImage img={img} />
      <ProductTitle title={title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};
