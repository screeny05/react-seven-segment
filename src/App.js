import { Line } from './segments/line';
import { useState } from 'react';
import {FlatStyleMap} from './segments/style-selector';

function App() {
  const [text, setText] = useState(' 1234567890 ');
  const [styleCombined, setStyleCombined] = useState('sports-300');
  
  const styleSplit = styleCombined.split('-');
  const style = styleSplit[0];
  const weight = styleSplit[1];

  return (
    <div className="App">
      <Line text={text} minChars={4} style={style} weight={weight}/>

      <input value={text} onChange={(e) => setText(e.target.value)}/>
      <select value={styleCombined} onChange={(e) => setStyleCombined(e.target.value)}>
        {FlatStyleMap.map(combinedStyle => <option key={combinedStyle} value={combinedStyle}>{combinedStyle}</option>)}
      </select>
    </div>
  );
}

export default App;
