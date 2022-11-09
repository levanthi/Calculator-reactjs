import classnames from 'classnames/bind';
import styles from './keyboard.module.scss';
import Button from '../Button';

const cx = classnames.bind(styles);

const keyList = [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', '.', 0, '=', '+'];

function Keyboard({ handleClick }) {
   return (
      <div className={cx('keyboard')}>
         <div className={cx('delete-group')}>
            <Button
               boldGray
               medium
               className={'c-9'}
               onClick={() => {
                  handleClick('AC');
               }}
            >
               DEL ALL
            </Button>
            <Button
               boldGray
               medium
               className={'c-3'}
               onClick={() => {
                  handleClick('DC');
               }}
            >
               DEL
            </Button>
         </div>

         {keyList.map((key) => {
            return (
               <Button
                  key={key}
                  gray
                  large
                  className={'c-3'}
                  onClick={() => {
                     handleClick(key);
                  }}
               >
                  {key}
               </Button>
            );
         })}
      </div>
   );
}

export default Keyboard;
