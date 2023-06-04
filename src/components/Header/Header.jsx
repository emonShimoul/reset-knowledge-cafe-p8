import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h2>Emon's Blog</h2>
      <div className="header-links">
        <a href="/shop">ABOUT ME</a>
        <a href="/order">CONTACT</a>
        <a href="/login">LOGIN</a>
      </div>
    </nav>
  );
};

export default Header;
