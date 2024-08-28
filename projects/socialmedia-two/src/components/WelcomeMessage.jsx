const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <>
      <h1>There is no message</h1>
      <button type="button" class="btn btn-primary" onClick={onGetPostsClick}>
        Get Post from SErver
      </button>
    </>
  );
};
export default WelcomeMessage;
