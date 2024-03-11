import React, { useState } from 'react';
import './App.css';
import Data from './components/Data';
import './components/Data.css'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {

    e.preventDefault() ;
    let amount = parseInt(count);
    if(count <= 0) {
      amount = 1;
    }else if(count > 10) {
      amount = 10 ;
    }

    setText(Data.slice(0 , amount))

  }

  return (
    <>
      <section className='container'>
        <h3>Lorem Ipsum Genrator</h3>
        <div className='content'>
          <h3>Paragraph : </h3>
          <form onSubmit={handleSubmit}>
            <input type='number' name='count' id='count' value={count} onChange={(e) => setCount(e.target.value)} />

            <button className='btn'>Generate</button>
          </form>
        </div>
        <article>
          {
            text.map((item, index) => {
              return (
                <p className="para" key={index}> {index+1}) {item}</p>
              )
            })
          }
        </article>
      </section>
    </>
  );
}

export default App;