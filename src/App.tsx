import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ElectricityMeterIcon from './assets/electricity-meter.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.scss';
import moment from "moment";
import 'moment/locale/pl'
moment.locale('pl');

interface AppProps {
  
}

const App: React.FC<AppProps> = (props) => {
  const [date,setDate]=useState(new Date());

  const [currentConsumption,setCurrentConsumption] = useState(20);

  useEffect(()=>{
      // const timer = setInterval(()=> setDate(new Date()),1000);
    const minRange = 5;
    const maxRange = 150;
    const timer = setInterval(()=> setCurrentConsumption(getRndInteger(minRange,maxRange)),10000)
     return function cleanup(){
       clearInterval(timer)
     } 
  },[currentConsumption])

  console.log(currentConsumption);
  
  const getRndInteger = (min:number, max:number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <main className={styles.mainWrap}>
      <Container>
        <Row>
          <Col>
      <h5>Licznik <b>V705048953698419</b></h5>
      <div>
        <img src={ElectricityMeterIcon} alt="licznik prądu" width={300} />
      </div>
      </Col>
      <Col>
        
        <div>
        <span className={styles.title}>Data: </span><span>{`${moment().format('L')} ${moment().format('LTS')}`}</span>
        </div>
        
        <div>
        <span className={styles.title}>Adres PPE </span><span>00-000 Miasto, ulica 1/2</span>
        </div>
        
        <div>
        <span className={styles.title}>Sprzedawca </span><span>Energa-Obrót SA</span>
        </div>
     
        <div>
        <span className={styles.title}>Okres umowy </span><span>Od 2013-01-01</span>
        </div>
     
        <div>
        <span className={styles.title}>Numer PPE </span><span>PL003700000000009</span>
        </div>
     
        <div>
        <span className={styles.title}>Taryfa </span><span>G12</span>
        </div>
       
        <div>
        <span className={styles.title}>Aktualne zużycie </span><span>{`${currentConsumption}kWh`}</span>
        </div>
        <div>
        <span className={styles.title}>Minimalne zużycie w ciągu dnia </span><span>{`4 kWh`}</span>
        </div>
        <div>
        <span className={styles.title}>Maksymalne zużycie w ciągu dnia </span><span>{`170 kWh`}</span>
        </div>
 
      </Col>
      </Row>
      </Container>
    </main>
  )
}
export default App