import { forwardRef } from 'react';
import clsx from 'clsx';

import classes from './Button.module.scss';

type Props = {
  children?: React.ReactNode;
  className?: string;
  disable?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLButtonElement>;
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  tabIndex?: number;
  type?: 'sky' | 'primary' | 'danger';
  variant?: 'circle' | 'default' | 'text' | 'outline';
  gradient?: 'verticallySky' | 'verticallyPrimary';
};

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    children,
    className,
    disable,
    gradient = '',
    htmlType,
    id,
    onClick,
    onKeyPress,
    variant = 'default',
    size = 'medium',
    style,
    tabIndex,
    type = 'primary',
    ...otherProps
  } = props;

  return (
    <button
      ref={ref}
      className={clsx(classes.component, {
        [className || '']: true,
        [classes[size]]: !!size,
        [classes[type]]: !!type,
        [classes[variant]]: !!variant,
        [classes[gradient]]: !!gradient,
      })}
      disabled={disable}
      type={htmlType}
      id={id}
      style={style}
      tabIndex={tabIndex}
      {...otherProps}
    >
      <span className="content">{children}</span>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
