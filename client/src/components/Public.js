import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">CommuniDesk</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Simplify communication, manage tasks effortlessly, and boost
          collaboration in one place.
        </p>
        <br />
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
