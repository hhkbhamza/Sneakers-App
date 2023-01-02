export default function SneakerItem({ name, price, img }) {
    return (
      <div className="employee">
        <img src={img} className="list-img" alt={img} />
        <div className="content">
          <h5 className="list-name">{name}</h5>
          <p className="list-title">{price}</p>
        </div>
      </div>
    );
  }
  