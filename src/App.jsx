import "bootstrap/dist/css/bootstrap.css";
import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitem from "./components/TodoItem";
import Todoitems from "./components/Todoitems";
import Container from "./components/container";

function App() {
  const item = [
    {
      name: "milk",
      date: "22/11/04",
    },
    {
      name: "banana",
      date: "22/3/12",
    },
    {
      name: "Grocery",
      date: "2/3/23",
    },
  ];

  return (
    <>
      <Appname />
      <Addtodo />
      <Todoitems todoitems={item} />
    </>
  );
}

export default App;
