import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [sigmoid, setSigmoid] = useState(0);

  useEffect(() => {
    fetch('/sigmoid/9').then(res => res.json()).then(data => {
      setSigmoid(data.sigmoid);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Test sigmoid is {sigmoid}.</p>
      <div className="wrapper">
      <h1>Training inputs</h1>
      <form>
      <fieldset>
           <input name="0_0" value="0" />
           <input name="0_1" value="0" />
           <input name="0_2" value="1" />
       </fieldset>
       <fieldset>
           <input name="1_0" value="1"/>
           <input name="1_1" value="1"/>
           <input name="1_2" value="1"/>
       </fieldset>
       <fieldset>
           <input name="2_0" value="1"/>
           <input name="2_1" value="0"/>
           <input name="2_2" value="1"/>
       </fieldset>
       <fieldset>
           <input name="3_0" value="0"/>
           <input name="3_1" value="1"/>
           <input name="3_2" value="1"/>
       </fieldset>
       <h1>Training outputs</h1>
           <input name="o0" value="0"/>
           <br></br>
           <input name="o1" value="1"/>
           <br></br>
           <input name="o2" value="0"/>
           <br></br>
           <input name="o3" value="0"/>
           <br></br>
       <button type="submit">Submit</button>
      </form>
    </div>
    </header>
    </div>
  );
}

export default App;
