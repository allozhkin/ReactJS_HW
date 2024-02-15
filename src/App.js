import logo from "./logo.svg";
import "./App.css";
import Message from "./companents/Message";

function App() {
  return (
    <div>
      <div className="content">
        <h1 className="title">HW_01</h1>
        <Message text="Hello From props" />
      </div>
    </div>
  );
}


export default App;
