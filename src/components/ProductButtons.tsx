import React from 'react';
import { useContext, CSSProperties, useCallback } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface ButtonProps {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: ButtonProps) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [
    counter,
    maxCount,
  ]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        className={styles.buttonMinus}
        type="button"
        onClick={() => increaseBy(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        type="button"
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
