import styles from "./progress-bar.module.css";
import { useProgress } from "./use-progress.js";

const ProgressBar = () => {
  const progress = useProgress();
  return (
    <div className={styles.container}>
      <div className={styles.progressBar} style={{ width: progress }} />
    </div>
  );
};

export default ProgressBar;
