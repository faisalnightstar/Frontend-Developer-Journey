import styles from "./Form.module.css";

const Form = () => {
  return (
    <>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className={styles["form-container"]}
      >
        <div className={styles["title"]}>
          <h2>Hire Me</h2>
          <hr />
        </div>
        <input
          className={styles["input-field"]}
          type="hidden"
          name="access_key"
          value="170e80ee-d55e-49de-9032-282566592651"
        />

        <input
          className={styles["input-field"]}
          type="text"
          name="name"
          placeholder="Your Name"
          autoComplete="your-name"
          required
        />
        <input
          className={styles["input-field"]}
          type="email"
          name="email"
          placeholder="Your E-mail"
          autoComplete="off"
          required
        />
        <textarea
          name="message"
          placeholder="Write message."
          autoComplete="message"
          className={styles["textarea-field"]}
          required
        ></textarea>
        <button className={styles["btn"]} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default Form;
