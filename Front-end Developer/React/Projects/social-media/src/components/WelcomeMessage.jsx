const WelcomeMeassage = ({ onGetPostClick }) => {
  return (
    <center>
      <h1 className="text-center welcome-message">
        Welcome! There is no post yet.
      </h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostClick}
      >
        Get post from server
      </button>
    </center>
  );
};
export default WelcomeMeassage;
