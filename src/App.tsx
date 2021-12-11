import React from "react";
import "./App.css";
import ProductCounter from "./ProductCounter";

export const App = () => {
  return (
    <div className="App">
      <ProductCounter product={{ productName: "Апельсин", count: 6 }} />
      <ProductCounter product={{ productName: "Яблоко" }} />
      <ProductCounter product={{ productName: "Ананас", count: 3 }} />
      <ProductCounter product={{ productName: "Арбуз", count: 46 }} />
      <ProductCounter product={{ productName: "Дыня" }} />
      {/* <ProductCounter productName="Яблоко" count={10} />
      <ProductCounter productName="Ананас" count={35} />
      <ProductCounter productName="Арбуз" count={0} />
      <ProductCounter productName="Дыня" count={4} /> */}
    </div>
  );
};

export default App;
