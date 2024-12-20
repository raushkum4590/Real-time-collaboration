import { Link } from "react-router-dom"


function Register() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
      <h2 className="text-center mb-4">Sign Up</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
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
            placeholder="Create a password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm your password"
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      <p className="text-center mt-3">
        Already have an account? 
        
        <Link to="/Login" className="text-primary">Log in</Link>
      </p>
    </div>
  </div>
  
  )
}

export default Register