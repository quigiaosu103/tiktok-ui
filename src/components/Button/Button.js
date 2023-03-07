import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  primary,
  outline,
  secondary,
  disabled,
  rounded= false,
  small = false,
  medium = false,
  large = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    Comp = 'a';
    props.href = href;
  }


  if(disabled) {
    delete props.onClick;
  }
  return (
    <Comp
      className={cx('wrapper', {
        primary,
        outline,
        secondary,
        disabled,
        small,
        medium,
        large,
        rounded,
        
        [className]: className,
      })}
      {...props}
    >
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon&&<span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}


Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
}

export default Button;
