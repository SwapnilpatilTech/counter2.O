import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const checkPrimeNum = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <main>
      <section className="container">
        <header>
          <p className="header">Counter App</p>
          <hr className="divider" />
        </header>

        <section className="button-group">
          <button
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
            className="button"
            data-testid="minusonebtn"
          >
            -
          </button>
          <span className="counter" data-testid="counter">
            {count}
          </span>
          <button
            onClick={() => setCount(count + 1)}
            className="button"
            data-testid="plusonebtn"
          >
            +
          </button>
        </section>

        <section className="reset-section">
          <button
            onClick={() => setCount(0)}
            className="reset-button"
            data-testid="resetbtn"
          >
            Reset
          </button>
        </section>

        <p className="result-text">
          Is counter even or odd:
          <span
            data-testid="odd-or-even"
            className={`result-value ${count % 2 === 0 ? "even" : "odd"}`}
          >
            {count % 2 === 0 ? "Even" : "Odd"}
          </span>
        </p>

        <p className="result-text">
          Is counter prime or not:
          <span
            data-testid="is-prime"
            className={`result-value ${
              checkPrimeNum(count) ? "prime" : "not-prime"
            }`}
          >
            {checkPrimeNum(count) ? "true" : "false"}
          </span>
        </p>
      </section>
    </main>
  );
}

export default App;
