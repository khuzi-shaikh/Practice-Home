import "./App.css";
import { ToDoList } from "./Component/ToDoList";
import { InputForm } from "./InputForm";
import { MaterialForm } from "./MaterialForm";
import "./MaterialForm.css"
import "./Component/ToDoList.css"
import "./Component/Bulb.css"
import { CounterTask } from "./Component/CounterTask";
import "./Component/CounterTask.css"
import { BulbOnOff } from "./Component/BulbOnOff";

export function App() {
  return (
    <div className="App">
      {/* <MaterialForm /> */}
      {/* <InputForm/> */}
      {/* <ToDoList/> */}
      {/* <BulbOnOff/> */}
      <CounterTask/>
    </div>
  );
}
export default App;
