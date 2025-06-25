import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to the User Dashboard</h1>
      <p>
        Please <Link to="/login">log in</Link> to continue.
      </p>
      {/* <p>
        Please <Link to="/login">log in</Link> or{" "}
        <Link to="/register">register</Link> to continue.
      </p> */}
    </div>
  );
}
