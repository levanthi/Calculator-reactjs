import { useState } from 'react';
import Keyboard from './Components/Keyboard';
import View from './Components/View';

function App() {
   const [data, setData] = useState(0);
   const handleClick = (key) => {
      if (typeof key === 'number') {
         setData((pre) => {
            //Clear 0 when first input
            if (pre === 0) {
               return pre + key;
            } else {
               return pre + String(key);
            }
         });
      } else {
         switch (key) {
            case '.':
               //each number only have 1 point(.)
               const newData = String(data).split('').reverse();
               for (let i of newData) {
                  if (i === '.') return;
                  else if (i === '+' || i === '-' || i === '*' || i === '/') {
                     break;
                  }
               }
               setData((pre) => pre + key);
               break;
            case '+':
            case '-':
            case '*':
            case '/':
               // 2 operator can't stand side by side
               const lastChar = data[data.length - 1];
               if ('+-*/'.includes(lastChar)) {
                  setData((pre) => pre.slice(0, pre.length - 1) + key);
               } else {
                  setData((pre) => pre + key);
               }
               break;
            case 'DC':
               setData((pre) => {
                  if (pre.length > 1) {
                     return pre.replace(/.$/, '');
                  }
                  return 0;
               });
               break;
            case 'AC':
               setData(0);
               break;
            case '=':
               try {
                  setData(eval(data));
               } catch (err) {
                  console.log(err);
               }
               break;
            default:
               return;
         }
      }
   };
   return (
      <div className="App">
         <View data={data} />
         <Keyboard handleClick={handleClick} />
      </div>
   );
}

export default App;
