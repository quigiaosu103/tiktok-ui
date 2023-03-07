import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/acssets/images';
import styles from './Images.module.scss';


const Image = forwardRef(({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) => {
  const [fallBack, setFallBack] = useState('');
  const handleErr = () => {
    setFallBack(customFallBack);
  };
  return (
    <img
      {...props}
      className={classNames(className, styles.wrapper)}
      alt={alt}
      src={fallBack || src}
      ref={ref}
      onError={handleErr}
    ></img>
  );
});


Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallBack: PropTypes.string,
}
export default Image;
