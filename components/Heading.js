import styles from "./styles/Heading.module.css";

const Heading = ({ children, className }) => {
  return (
    <div className={className}>
      <h3>{children}</h3>
      <hr />
    </div>
  );
};

export default Heading;
