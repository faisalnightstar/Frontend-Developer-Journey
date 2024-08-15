import styles from "./FormContainer.module.css";
import Form from "./Form";
const FormContainer = () => {
  return (
    <>
      <div className={styles["container"]}>
        <Form />
      </div>
    </>
  );
};
export default FormContainer;
