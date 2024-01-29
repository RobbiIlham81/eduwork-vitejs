// eslint-disable-next-line react/prop-types
const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge bg-light text-dark fs-4">News</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("Technologyy")}>
                  Technology
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("Businessy")}>
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("Health")}>
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("Science")}>
                  Science
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("Sports")}>
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("Entertainment")}>
                  Entertainment
                </div>
              </li>
            </ul>

            <form className="d-flex" role="Search">
              <input className="form-control me-2" type="Search" placeholder="Search" aria-label="Search"></input>
              <button className="btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
