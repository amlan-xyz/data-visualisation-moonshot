import { useData } from "../context/data.context";

export const Navbar = () => {
  const { dispatch } = useData();
  return (
    <nav className="navbar">
      <header>VisualDocs</header>
      <div className="nav__links">
        <button
          onClick={() => dispatch({ type: "LOGOUT" })}
          className="primary__btn"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
