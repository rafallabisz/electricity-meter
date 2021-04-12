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
        <div>{`Data: ${moment().format('L')} ${moment().format('LTS')}`}</div>
      </Col>
      </Row>
      </Container>
    </main>
  )
}
export default App