import faqsData from "../fixtures/faqs.json";
import AccordianItem from "./AccordianItem";
import { BsChevronRight } from "react-icons/bs";
const Accordian = () => {
  return (
    <div className="accordian-container">
      <h3>Frequently Asked Questions</h3>
      {faqsData.map((item) => {
        return <AccordianItem key={item.id} item={item} />;
      })}
      <form className="opt-form">
        <input type="text" id="input" placeholder="Email Address" />
        <div className="opt-form-btn">
          <button type="submit" className="btn form-opt-btn">
            Try it now
            <BsChevronRight className="icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Accordian;
