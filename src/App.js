import './App.scss';

import './components/dummyForm.scss';

function App() {
  return (
    <div className="App">
      <h1>Learning React</h1>

      <div className="form-box">
        {/* Form Start  */}
        <form className="form">
          <div className="form__group">
            <input type="text" className="form__control"/>
          </div>

          <div className="form__group">
            <input type="password" className="form__control"/>
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
