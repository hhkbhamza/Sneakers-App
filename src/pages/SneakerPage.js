import { useParams } from "react-router-dom";
import Data from "../data";
import { useState } from "react";
export default function SneakerPage(props) {
  const [credit, setCredit] = useState("");

  const handleCreditChange = event => {
    setCredit(event.target.value)
  };


  const handleSubmit = event => {
    event.preventDefault();
    alert(`This is the credit card number you entered: \n 
            credit: ${credit} \n `);
    return checkCredit(credit) === true;
    
  };
  function checkCredit(num) {
    console.log(num);
    let arr = num.toString().split("");
    const holder = [];
    // console.log(arr)
    // console.log(typeof arr[0])
    for (let i = 0; i < arr.length; i++) {
      parseInt(i, 10);
      // console.log(typeof i )
    }
    // console.log(arr)
    // console.log(typeof arr[0])
    // console.log(arr)
    // console.log(holder)
    for (let i = 0; i < arr.length - 1; i += 2) {
      if (arr[i] * 2 > 9) {
        holder.push(parseInt(arr[i] * 2 - 9));
        // console.log(holder)
      } else {
        holder.push(parseInt(arr[i] * 2));
      }
    }
    for (let i = 1; i <= arr.length - 1; i += 2) {
      holder.push(parseInt(arr[i]));
      // console.log(typeof i)
    }
    // console.log(holder)
    return checkValid(holder);
  }
  function checkValid(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    console.log(sum);
    console.log(sum % 10 === 0);
  }
  const { id } = useParams();
  console.log(id);
  return (
    <div className="AllInfo">
      <div className="sneakerImg">
        <img src={Data[id].img} alt={Data[id].img} />
      </div>
      <div className="name-title">
        <h3>{Data[id].name}</h3>
        <p className="first-p">{Data[id].price}</p>
        <form className="credit-form" onSubmit={handleSubmit}>
          <div>
            <label>Enter Credit Card Number and submit to place order:</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Credit Card Number"
              onChange={handleCreditChange}
              value={credit}
            />
          </div>
          <button type="submit" className="submitbtn">Submit</button>
        </form>
      </div>
    </div>
  );
}
