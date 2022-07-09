import React from 'react';
import { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface TitleProps {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: TitleProps) => {
  const { title: contextTitle } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : contextTitle}
    </span>
  );
};
