import classnames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import styles from './view.module.scss';

const cx = classnames.bind(styles);

function View({ data }) {
   const inputRef = useRef();
   useEffect(() => {
      inputRef.current.focus();
   });
   return (
      <div className={cx('view')}>
         <input
            readOnly
            ref={inputRef}
            value={data}
            spellCheck={false}
            onChange={() => {
               return false;
            }}
         />
      </div>
   );
}

export default View;
