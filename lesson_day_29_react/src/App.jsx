import React from "react";
import MessageComponent from "./components/MessageComponents";
import People from "./components/people";
import List from "./components/List";

function App() {
  const shouldShowMessage = true;
  return (
    <div className="App">
      <h1>Welcome to the Conditional Rendering Demo</h1>
      <MessageComponent showMessage={shouldShowMessage} />
      <People />
      <List />
    </div>
  );
}

export default App;
