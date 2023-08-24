import React from 'react';
import Tabs from './Tabs';

const tabData = [
  { title: 'Tab 1', content: 'This is the ontent for Tab 1' },
  { title: 'Tab 2', content: 'This is the ontent for Tab 2' },
  { title: 'Tab 3', content: 'This is the ontent for Tab 3' },
];

const App = () => {
  return (
    <div className="App">
      <Tabs tabs={tabData} />
    </div>
  );
};

export default App;