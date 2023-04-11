import { useState } from "react";

export default function MyApp() {
  return (
    <div>
      <MyButton />
    </div>
  );
}

function MyButton() {
  var init = localStorage.getItem("count");
  if (init === null) init = 0;
  const [count, setCount] = useState(init);
  function handleClick() {
    setCount(Number(count) + 1);
    localStorage.setItem("count", count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}
