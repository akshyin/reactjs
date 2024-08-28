const Siderbar = ({ selectedTab, setSelectedTab }) => {
  const handleOnClick = (tabName) => {
    setSelectedTab(tabName);
  };
  return (
    <div
      className="flex-shrink-0 p-3 bg-white siderbar"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
      >
        <svg className="bi me-2" width="30" height="24">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-5 fw-semibold">Collapsible</span>
      </a>
      <ul className="list-unstyled ps-0 ">
        <li className="mb-1">
          <button
            className={
              selectedTab === "Home"
                ? "btn btn-toggle align-items-center rounded active"
                : "btn btn-toggle align-items-center rounded"
            }
            onClick={() => {
              handleOnClick("Home");
            }}
          >
            Home
          </button>
        </li>
        <li className="mb-1">
          <button
            className={
              selectedTab === "Create Post"
                ? "btn btn-toggle align-items-center rounded active"
                : "btn btn-toggle align-items-center rounded"
            }
            onClick={() => {
              handleOnClick("Create Post");
            }}
          >
            Create Post
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Siderbar;
