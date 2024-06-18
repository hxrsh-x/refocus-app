import './App.css';
import Settings from './Settings';
import SettingsContext from './SettingsContext';
import Timer from './Timer';
import { useState } from 'react';

function App() {

  const [showSettings, setshowSettings] = useState(false);
  const [workTime, setWorkTime] = useState(1);
  const [breakTime, setBreakTime] = useState(1);

  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setshowSettings,
        workTime,
        breakTime,
        setWorkTime,
        setBreakTime,
      }}>
      {showSettings ? <Settings/> :<Timer/>}
      </SettingsContext.Provider>
    
    </main>
  );
}

export default App;
