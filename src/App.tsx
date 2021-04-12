import React from "react";
import ElectricityMeterIcon from './assets/electricity-meter.jpg';

interface AppProps {
  
}

const App: React.FC<AppProps> = (props) => {
  return (
    <main>
      <h2>Licznik prądu</h2>
      <div>
        <img src={ElectricityMeterIcon} alt="licznik prądu" width={300} />
      </div>
    </main>
  )
}
export default App