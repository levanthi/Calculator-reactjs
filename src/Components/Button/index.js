import classnames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classnames.bind(styles);

function Button({
   gray,
   boldGray,
   large,
   medium,
   className,
   children,
   onClick,
}) {
   return (
      <button
         className={cx('button', className, { gray, boldGray, large, medium })}
         onClick={onClick}
      >
         {children}
      </button>
   );
}

export default Button;
