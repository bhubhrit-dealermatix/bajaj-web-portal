import React from "react";
import DisplayCards from '../components/displayCards';
import FilterPanel from '../components/filterPanel';

const App: React.FC = () => {
  return (
    <div className="main-container-fluid section-spacing_top section-spacing_bottom extra-top">
      <DisplayCards />
      <FilterPanel />
    </div>
  );
};

export default App;
