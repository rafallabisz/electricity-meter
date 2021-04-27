import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ElectricityMeterIcon from './assets/electricity-meter.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.scss';
import moment from "moment";
import 'moment/locale/pl'
import Background from './assets/background.jpg'
moment.locale('pl');

interface AppProps {
  
}

const App: React.FC<AppProps> = (props) => {
  const [date,setDate]=useState(new Date());

  const [currentConsumption,setCurrentConsumption] = useState(0.85);

  useEffect(()=>{
      // const timer = setInterval(()=> setDate(new Date()),1000);
    const minRange = 0.2;
    const maxRange = 2;
    const timer = setInterval(()=> setCurrentConsumption(getRndInteger(minRange,maxRange)),5000)
     return function cleanup(){
       clearInterval(timer)
     } 
  },[currentConsumption])

  console.log(currentConsumption);
  
  const getRndInteger = (min:number, max:number) => {
    return Math.random() * (max - min + 0.01);
    // return Math.floor(Math.random() * (max - min + 0.01)) + min;
  }

  return (
    <main className={styles.mainWrap} style={{background:`url(${Background})`}}>
      <Container>
        <Row>
          <Col>
      <h5>Licznik <b>V705048953698419</b></h5>
      <div>
        <img src={ElectricityMeterIcon} alt="licznik prądu" width={300} />
      </div>
      </Col>
      <Col>
        
        <section className={styles.containerData}>
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
        <span className={styles.title}>Aktualne zużycie </span><span>{`${currentConsumption.toFixed(2)} kWh/doba`}</span>
        </div>
        <div>
        <span className={styles.title}>Minimalne zużycie w ciągu dnia </span><span>{`0.12 kWh/doba`}</span>
        </div>
        <div>
        <span className={styles.title}>Maksymalne zużycie w ciągu dnia </span><span>{`2.15 kWh/doba`}</span>
        </div>
        </section>
      </Col>
      </Row>
      </Container>
    </main>
  )
}
export default App