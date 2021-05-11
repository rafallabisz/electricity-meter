import Dashboard from "./components/Dashboard"
import ElectricityMeter from "./components/ElectricityMeter"
import React from "react"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"


interface AppProps {
  
}

const App: React.FC<AppProps> = (props) => {



  return(
    <Router>
    <Switch>
      <Route exact path={`/electricity-meter`} component={ElectricityMeter} />
      <Route exact path={`/dashboard`} component={Dashboard} />
      
    </Switch>
  </Router>
  )
//   const [date,setDate]=useState(new Date());

//   const [currentConsumption,setCurrentConsumption] = useState(0.85);
//   const [nightZone,setNightZone]=useState(false);

//   useEffect(()=>{
//       // const timer = setInterval(()=> setDate(new Date()),1000);
//     const minRange = 0.2;
//     const maxRange = 2;
//     const timer = setInterval(()=> setCurrentConsumption(getRndInteger(minRange,maxRange)),1000)
//      return function cleanup(){
//        clearInterval(timer)
//      } 
//   },[currentConsumption])

//   const getRndInteger = (min:number, max:number) => {
//     return Math.random() * (max - min + 0.5);
//   }

//   const handleChangeSwitch = ()=>{
// setNightZone(prev=>!prev)
//   }

//   return (
//     <main className={styles.mainWrap} style={{background:`url(${Background})`}}>
//       <Container>
//         <Row>
//           <Col>
//       <h5>Licznik <b>V705048953698419</b></h5>
//       <div>
//         <img src={ElectricityMeterIcon} alt="licznik prądu" width={300} />
//       </div>
//       </Col>
//       <Col>
        
//         <section className={styles.containerData}>
//         <div>
//         <span className={styles.title}>Data: </span><span>{`${moment().format('L')} ${moment().format('LTS')}`}</span>
//         </div>
        
//         <div>
//         <span className={styles.title}>Adres PPE </span><span>00-000 Miasto, ulica 1/2</span>
//         </div>
        
//         <div>
//         <span className={styles.title}>Sprzedawca </span><span>Energa-Obrót SA</span>
//         </div>
     
//         <div>
//         <span className={styles.title}>Okres umowy </span><span>Od 2013-01-01</span>
//         </div>
     
//         <div>
//         <span className={styles.title}>Numer PPE </span><span>PL003700000000009</span>
//         </div>
     
//         <div>
//         <span className={styles.title}>Taryfa </span><span>G12</span>
//         </div>
       
//         <div>
//         <span className={styles.title}>Aktualne zużycie </span><span>{`${currentConsumption.toFixed(2)} kWh/doba`}</span>
//         </div>
//         <div>
//         <span className={styles.title}>Minimalne zużycie w ciągu dnia </span><span>{`0.06 kWh/doba`}</span>
//         </div>
//         <div>
//         <span className={styles.title}>Maksymalne zużycie w ciągu dnia </span><span>{`2.95 kWh/doba`}</span>
//         </div>

//         <div className={styles.zoneContainer}>
//           <span onClick={()=>setNightZone(false)}>Strefa dzienna</span>
//         <Switch
//             checked={nightZone}
//             onChange={handleChangeSwitch}
//             onColor="#86d3ff"
//             onHandleColor="#2693e6"
//             handleDiameter={30}
//             uncheckedIcon={false}
//             checkedIcon={false}
//             boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
//             activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
//             height={20}
//             width={48}
//             className="react-switch"
//             id="material-switch"
//           />
//           <span onClick={()=>setNightZone(true)}>Strefa nocna</span>
//           </div>
//         </section>
//       </Col>
//       </Row>
//       </Container>
//     </main>
//   )
}
export default App