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

  useEffect(()=>{
      const timer = setInterval(()=> setDate(new Date()),1000);

     return function cleanup(){
       clearInterval(timer)
     } 
  })
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
        {/* <div>{`Data: ${moment().format('L')} ${moment().format('LTS')}`}</div> */}
        
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
 
      </Col>
      </Row>
      </Container>
    </main>
  )
}
export default App