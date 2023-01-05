import { useParams } from "react-router-dom";
import Data from "../data"
export default function SneakerPage(props) {
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
      </div>
    </div>
  );
}
