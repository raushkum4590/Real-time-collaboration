import { Link } from "react-router-dom"


function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
  <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
    <h2 className="text-center mb-4">Login</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">Login</button>
        <button type="button" className="btn btn-outline-secondary">Forgot Password?</button>
      </div>
    </form>
    <p className="text-center mt-3">
      Do not have an account? <Link to="/Register" className="text-primary">Sign up</Link>
    </p>
  </div>
</div>

  )
}

export default Login