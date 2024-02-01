import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
function App() {
  const[counter, setValue] = useState(0);
  const[keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  console.log('run all the time');
  const iRunOnlyOnce = () =>{
    console.log("i run only once.");
  };

  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  useEffect(()=>{
    console.log("keyword is", keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("counter is" + counter);
  },[counter]);
  // useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here..." value={keyword}/>
      <h2>{keyword}</h2>
      <h1 className= {styles.title}>Welcome</h1>
      <Button text={"Continue"}/>
      <button onClick={onClick}>Click me!</button>
      <h4>This is vlaue : {counter}</h4>
    </div>
  );
}

export default App;
