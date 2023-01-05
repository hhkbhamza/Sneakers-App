import SneakerItem from "./SneakerItem";
import data from "../data";

function SneakerList(props) {
  const sneakers = data.map((ele, index) => {
    return <SneakerItem key={index} {...ele} />;
  });
}

export default SneakerList;
