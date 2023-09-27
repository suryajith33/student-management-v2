import './navbar.scss'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark sticky-top ">
        <div className="container-fluid">
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar