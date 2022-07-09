import React from 'react';
import { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface ImageProps {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: ImageProps) => {
  const { img: contextImg } = useContext(ProductContext);

  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (contextImg) {
    imgToShow = contextImg;
  } else {
    imgToShow = noImage;
  }
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Product"
      style={style}
    />
  );
};
