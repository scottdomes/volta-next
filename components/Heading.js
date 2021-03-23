import styles from "./styles/Heading.module.css";

const Heading = ({ children }) => {
  return (
    <div>
      <h3>{children}</h3>
      <hr />
    </div>
  );
};

export default Heading;
