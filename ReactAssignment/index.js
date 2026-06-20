// App.js
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="form-box">
        <h2>Student Registration Form</h2>

        <form>
          <input type="text" placeholder="Student Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Course" />
          <input type="tel" placeholder="Mobile Number" />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;