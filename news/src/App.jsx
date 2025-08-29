import React from "react";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">📰 News Authenticator</h1>
      <Home />
    </div>
  );
}

export default App;
