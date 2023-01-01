import { checkToken } from "../utilities/users-service";
import { useState } from "react";

function GalleryPage(props) {
  const [expDate, setExpDate] = useState("")
  const handleCheckToken = async () => {
    const expDate = await checkToken()
    setExpDate(expDate)
  }
  return (
    <>
      <h1>GalleryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
      {
        expDate ?
        <p>{expDate.toLocaleString()}</p>
        : 
        ""
      }
    </>
  );
}

export default GalleryPage;
