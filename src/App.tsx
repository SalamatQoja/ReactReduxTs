import React from "react";
import MainSide from "./ChangeState/MainSide";
import TodoApp from "./Components/TodoApp";
import ProductApp from "./Products/ProductApp";

const App: React.FC = () => {
  return (
    <div>
      <TodoApp />
      <MainSide />
      <ProductApp/>
    </div>
  );
};

export default App;
