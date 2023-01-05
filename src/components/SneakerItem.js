// function handleClick() {
//   return <Link to="/gallery/:id"></Link>;
// }
import { Link } from "react-router-dom";

export default function SneakerItem({ index, name, price, img }) {
  console.log(index);
  return (
    <>
      <Link to={`/gallery/${index}`}>
        <div className="SneakerItem">
          <img src={img} className="list-img" alt={img} />
          <div className="content"></div>
        </div>
      </Link>
      <h3>{name}</h3>
      {/* <p>${price}</p> */}
    </>
  );
}
