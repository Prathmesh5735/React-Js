// import "../node_modules/bootstrap/bootsrap.min.css"

const Header = () => {
  return (
    <header className="bg-light py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">logo</div>
          <nav>
            <a href="#" className="mx-2">Home</a>
            <a href="#" className="mx-2">About</a>
            <a href="#" className="mx-2">Contact</a>
          </nav>
          <div>
            <a href="#" className="mx-1">FB</a>
            <a href="#" className="mx-1">TW</a>
            <a href="#" className="mx-1">IG</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
