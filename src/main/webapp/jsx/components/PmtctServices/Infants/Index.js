import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table';
import axios from "axios";
import { url as baseUrl , token as token} from "./../../../../api";
import { forwardRef } from 'react';
import 'semantic-ui-css/semantic.min.css';
import "react-widgets/dist/css/react-widgets.css";
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import 'react-toastify/dist/ReactToastify.css';
import 'react-widgets/dist/css/react-widgets.css';
import { makeStyles } from '@material-ui/core/styles'
//import {Menu,MenuList,MenuButton,MenuItem,} from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import {FaUserPlus} from 'react-icons/fa'
import { Dropdown,Button, Menu, Icon } from 'semantic-ui-react'


const tableIcons = {
Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


const InfantInformation = (props) => {
    const [infants, setInfants] = useState([])
    //const [delivery, setDelivery] = useState([])
    const [loading, setLoading] = useState(true)
    const [aliveChild, setAliveChild] = useState(0)
    useEffect(() => {
        InfantInfo();
        DeliveryInfo();
      }, []);
    ///GET LIST OF Infants
    const InfantInfo =()=>{
        setLoading(true)
        axios
            .get(`${baseUrl}pmtct/anc/get-infant-by-ancno/${props.patientObj.ancNo}`,
                { headers: {"Authorization" : `Bearer ${token}`} }
            )
            .then((response) => {
            setLoading(false)
                    setInfants(response.data)
            })

            .catch((error) => {
            //console.log(error);
            });
        
    }
    ///GET Delivery Object
    const DeliveryInfo =()=>{
        setLoading(true)
        axios
            .get(`${baseUrl}pmtct/anc/view-delivery/${props.patientObj.id}`,
                { headers: {"Authorization" : `Bearer ${token}`} }
            )
            .then((response) => {
            setLoading(false)
            //setDelivery(response.data)
            setAliveChild(response.data && response.data.numberOfInfantsAlive ? response.data.numberOfInfantsAlive : 0)
            })

            .catch((error) => {
            //console.log(error);
            });
        
    }
    const LoadViewPage =(row,action)=>{
        
        if(row.path==='Mental-health'){        
            props.setActiveContent({...props.activeContent, route:'mental-health-view', id:row.id, actionType:action})

        }else if(row.path==='Art-commence'){
            props.setActiveContent({...props.activeContent, route:'art-commencement-view', id:row.id, actionType:action})

        }
        
    }
    const LoadPage =()=>{    
        props.setActiveContent({...props.activeContent, route:'add-infant', id:"", actionType:""})
}

  return (
    <div>
    {(infants.length  < aliveChild) && (aliveChild > infants.length ) && (<>
        <Button
            variant="contained"
            color="primary"
            className=" float-end  mr-2 mt-2"
            onClick={()=>LoadPage()}
            style={{backgroundColor:"#014d88"}}
            startIcon={<FaUserPlus size="10"/>}
        >
            <span style={{ textTransform: "capitalize" }}>New Infant</span>
        </Button>
    </>)}
        <br/><br/><br/>
            <MaterialTable
            icons={tableIcons}
              title="List of Infants "
              columns={[
                { title: "Infant Name", field: "name" },
                {
                  title: "Hospital No.",
                  field: "hospital",
                }, 
                { title: "ANC NO.", field: "anc" }, 
                { title: "NIN Number", field: "nin" },             
                { title: "Date of Delivery", field: "date" },
                { title: "Sex", field: "sex", filtering: false },        
                { title: "Actions", field: "actions", filtering: false }, 
              ]}
              isLoading={loading}
              data={infants.map((row) => ({
                   name: row.firstName + " " + row.surname,
                   hospital: row.hospitalNumber,
                   anc: row.ancNo,
                   nin: row.nin,
                   sex: row.sex,
                   date: row.dateOfDelivery,
                   actions:
            
                    <div>
                        <Menu.Menu position='right'  >
                        <Menu.Item >
                            <Button style={{backgroundColor:'rgb(153,46,98)'}} primary>
                            <Dropdown item text='Action'>

                            <Dropdown.Menu style={{ marginTop:"10px", }}>
                                <Dropdown.Item onClick={()=>LoadViewPage(row, 'view')}> <Icon name='eye' />Follow Up Visit  </Dropdown.Item>
                                {/* {row.viewable && ( <Dropdown.Item  onClick={()=>LoadViewPage(row, 'update')}><Icon name='edit' />Edit</Dropdown.Item>)}
                                {row.viewable && ( <Dropdown.Item  onClick={()=>LoadDeletePage(row, 'delete')}> <Icon name='trash' /> Delete</Dropdown.Item>)}  */}
                            </Dropdown.Menu>
                        </Dropdown>
                            </Button>
                        </Menu.Item>
                        </Menu.Menu>
                  </div>
                  
                  }))}
            
                        options={{
                          headerStyle: {
                              backgroundColor: "#014d88",
                              color: "#fff",
                          },
                          searchFieldStyle: {
                              width : '200%',
                              margingLeft: '250px',
                          },
                          filtering: false,
                          exportButton: false,
                          searchFieldAlignment: 'left',
                          pageSizeOptions:[10,20,100],
                          pageSize:10,
                          debounceInterval: 400
            }}
            />
         
    </div>
  );
}

export default InfantInformation;


