import pic from "../../assets/images/pic.jpg";
import { ReactComponent as Calendar } from "../../assets/svgs/calendar.svg";

const Card = ({ event, desc, date, time, loc }) => {
  return (
    <div>
      <img src={pic} alt={"asdf"} />
      <span>
        <Calendar />
        {`${date} @ ${time}`}
      </span>
      <h1>{event}</h1>
      <h3>{loc}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
