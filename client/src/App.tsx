import Header from "./components/header/Header";
import {Route,Routes} from "react-router-dom"
import AddAccount from "./components/add-acount/AddAccount";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route exact path="/add-account" element={<AddAccount />} />
      </Routes>
    </div>
  );
}

export default App;
