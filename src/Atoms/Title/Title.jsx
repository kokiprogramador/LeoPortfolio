import styles from "./Title.module.css";

const Title = ({ text, customClass, typeTitle = "h3" }) => {
  switch (typeTitle.toLowerCase()) {
    case "h1":
      return <h1 className={`${styles.Title} ${customClass}`}>{text}</h1>;
    case "h2":
      return <h2 className={`${styles.Title} ${customClass}`}>{text}</h2>;
    case "h3":
      return <h3 className={`${styles.Title} ${customClass}`}>{text}</h3>;
    case "h4":
      return <h4 className={`${styles.Title} ${customClass}`}>{text}</h4>;
    case "h5":
      return <h5 className={`${styles.Title} ${customClass}`}>{text}</h5>;
    case "h6":
      return <h6 className={`${styles.Title} ${customClass}`}>{text}</h6>;
    default:
      // Fallback to h3 if an invalid type is provided
      return <h3 className={`${styles.Title} ${customClass}`}>{text}</h3>;
  }
};

export default Title;
