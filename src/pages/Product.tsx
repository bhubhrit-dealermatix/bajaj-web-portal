import React from "react";
import DisplayCards from '../components/displayCards';
import FilterPanel from '../components/filterPanel';

const App: React.FC = () => {
  return (
    <div className="main-container">
      <DisplayCards />
      <FilterPanel />
    </div>
  );
};

export default App;
