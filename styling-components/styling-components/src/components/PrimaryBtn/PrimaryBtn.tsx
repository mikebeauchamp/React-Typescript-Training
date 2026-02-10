import btnStyles from "./PrimaryBtn.module.css";
import globalStyles from "../../css/global.module.css";

const PrimaryBtn = () => {
  return (
    <button className={[btnStyles.primaryBtn, globalStyles.button].join(" ")}>
      React + TypeScript
    </button>
  );
};

export default PrimaryBtn;
