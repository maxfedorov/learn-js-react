import styles from "./tab.module.css";
import classNames from "classnames";

const Tab = ({ title, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={isActive}
      className={classNames(styles.tab, isActive && styles.active)}
    >
      {title}
    </button>
  );
};

export default Tab;
