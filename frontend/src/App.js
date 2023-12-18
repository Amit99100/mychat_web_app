import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      {/* if  i will not give exact it will render what ever path will come in ones path like
      in /chats path / also coming so both will get render , so to avoid this  ,  i need to 
      provide exact paths.  */}
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
