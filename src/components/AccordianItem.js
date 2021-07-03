import { useState } from "react";
import icon from "../images/icons/add.png";
const AccordianItem = ({ item }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="accordian-item">
      <div className="accordian-info">
        <h4>{item.header}</h4>
        <img
          src={icon}
          alt="open"
          onClick={() => setShow(!show)}
          className={`${show ? "accordian-show-img" : " "}`}
        />
      </div>
      <div
        className={`${show ? "accordian-body show-body" : "accordian-body"}`}
      >
        <p>{item.body}</p>
      </div>
    </div>
  );
};
export default AccordianItem;
