import { PropTypes } from "prop-types";
import "./Counter.css";

export default function CounterButton({ by, incrementTotal, decrementTotal }) {
  return (
    <div className="Counter">
      <button className="counterButton" onClick={() => incrementTotal(by)}>
        +{by}
      </button>
      <button className="counterButton" onClick={() => decrementTotal(by)}>
        -{by}
      </button>
    </div>
  );
}

CounterButton.propsTypes = {
  by: PropTypes.number,
};

CounterButton.defaultProps = {
  by: 1,
};
