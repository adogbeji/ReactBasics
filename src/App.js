// import React from 'react';  // React.useState()  --> 1st approach
import { useState } from 'react';  // 2nd approach

import './App.scss';

import './components/dummyForm.scss';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // console.log('STATE => ', email, password);
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevents form submission
    console.log('STATE => ', email, password);
  }

  return (
    <div className="App">
      <div className="text-box">
        <h1 className="text">Learning React</h1>
      </div>

      <div className="form-box">
        {/* Form Start  */}
        <form onSubmit={handleSubmit} className="form">
          <div className="form__group">
            <input type="email" value={email} onChange={event => setEmail(event.target.value)} className="form__control"/>
          </div>

          <div className="form__group">
            <input type="password" value={password} onChange={event => setPassword(event.target.value)} className="form__control"/>
          </div>

          {/* Button Start */}
          <button className="form__btn form__btn--lg form__btn--dark form__btn--rounded">
            Submit
          </button>
          {/* Button End */}
        </form>
        {/* Form End */}
      </div>
    </div>
  );
}

export default App;
