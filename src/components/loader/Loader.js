import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = ({ width }) => {
  return (
    <div className={css.loader}>
      <Oval
        color="#4b86ca"
        secondaryColor="#4b86ca"
        strokeWidth="5"
        animationDuration="0.75"
        width={width}
        visible={true}
      />
    </div>
  );
};

export default Loader;
