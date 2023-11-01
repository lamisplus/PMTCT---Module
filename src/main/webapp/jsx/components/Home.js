import React, {useState, Fragment, useEffect } from "react";
import { Row, Col, Card,  Tab, Tabs, } from "react-bootstrap";
import NotEnrollPatients from './Patient/PatientList'
import ActiveANCPatients from './Patient/ActiveANCPatientList'
//import VisualisationHome from './Visualisation/Index'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { FaUserPlus } from "react-icons/fa";
import PmtctEntryPoint from "./PmtctServices/PmtctEntryPoint";
import ANCPatients from "./Patient/ActiveANCPatientList";

//import PageTitle from "./../layouts/PageTitle";
const divStyle = {
  borderRadius: "2px",
  fontSize: 14,
};

const Home = (props) => {
    const [key, setKey] = useState('home');
    const [modalShow, setModalShow] = useState(false);
    useEffect(() => { 
      setKey('home')
    },[])

  return (
    <Fragment>  
      <div className="row page-titles mx-0" style={{marginTop:"0px", marginBottom:"-10px"}}>
			<ol className="breadcrumb">
				<li className="breadcrumb-item active"><h4>PMTCT</h4></li>
			</ol>
		  </div>
      {/* <Link to={"register-patient"}> */}
            <Button
                variant="contained"
                color="primary"
                className=" float-end mb-10"
                startIcon={<FaUserPlus size="10"/>}
                style={{backgroundColor:'#014d88'}}
                onClick={(e)=>{
                  e.preventDefault()
                  setModalShow(true)
                }}
            >
                <span style={{ textTransform: "capitalize" }}>New Patient</span>
            </Button>
        {/* </Link> */}
        <br/><br/>
        <Row>       
        <Col xl={12}>
        <Card style={divStyle}>      
        <Card.Body>
              {/* <!-- Nav tabs --> */}

              <div className="custom-tab-1">
              <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                  

                  <Tab eventKey="home" title="Find Patients">                   
                 <NotEnrollPatients />
                  </Tab>
                  <Tab eventKey="anc" title="ANC Patients">
                  <ANCPatients />
                  </Tab>

                  <Tab eventKey="pmtct" title="General PMTCT Patients">
                  <ActiveANCPatients />
                  </Tab>
                  {/* <Tab eventKey="visualization" title="Data Visualisation">                   
                    <VisualisationHome />
                  </Tab>                     */}

                </Tabs>

              </div>

            </Card.Body>
      
          </Card>

        </Col>
        
      </Row>
      <PmtctEntryPoint
      route="/register-patient"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Fragment>
  );
};

export default Home;
