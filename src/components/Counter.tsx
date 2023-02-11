import {useState} from 'react'
import classes from "./Counter.module.scss"

export default function Counter() {

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count => count +1);
    }

  return (
    <div>
        <p className={classes.text}>{count}</p>
        <button onClick={increment}>incr</button>
    </div>
  )
}
