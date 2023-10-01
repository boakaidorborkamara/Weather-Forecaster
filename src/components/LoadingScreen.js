const LoadingScreen = () => {
  return (
    <div
      className=" d-flex justify-content-center align-items-center"
      id="loading-msg-container"
    >
      <button className="btn btn-dark" type="button" disabled>
        <span
          class="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </div>
  );
};

export default LoadingScreen;
