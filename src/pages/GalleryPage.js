import { checkToken } from "../utilities/users-service";
import { useState } from "react";
import data from "../data";
import SneakerItem from "../components/SneakerItem";

function GalleryPage(props) {
  const [expDate, setExpDate] = useState("");
  const handleCheckToken = async () => {
    const expDate = await checkToken();
    setExpDate(expDate);
  };

  const sneakers = data.map((ele, index) => {
    return (
    <SneakerItem key={index} {...ele} />
    )
  });
  return (
    <>
      <h1>GalleryPage</h1>
      <SneakerItem name={sneakers}/>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
      {expDate ? <p>{expDate.toLocaleString()}</p> : ""}
    </>
  );
}

export default GalleryPage;
