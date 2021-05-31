import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const incrementBtnClickHandler = (e) => {
    setCount(count + 1);
  };
  const decrementBtnClickHandler = (e) => {
    setCount(count - 1);
  };
  return (
    <div data-test='component-app'>
      <h1 data-test='component-hello'>Hello</h1>
      <h1 data-test='component-counter_display'>
        Thie current count is: <span data-test='count'>{count}</span>
      </h1>
      <button
        onClick={incrementBtnClickHandler}
        data-test='component-increment_btn'>
        +1
      </button>
      <button
        onClick={decrementBtnClickHandler}
        data-test='component-decrement_btn'>
        -1
      </button>
    </div>
  );
}

export default App;
