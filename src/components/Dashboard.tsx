import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../App.module.scss';
import Background from '../assets/background.jpg'

interface DashboardProps {
  
}

const Dashboard: React.FC<DashboardProps> = (props) => {
  return (
    <main className={styles.mainWrap} style={{background:`url(${Background})`}}>
      <Container>
        <Row>
          <Col>
          <h3>Wykresy</h3>
          </Col>
        </Row>
      </Container>
    </main>
  )
}
export default Dashboard