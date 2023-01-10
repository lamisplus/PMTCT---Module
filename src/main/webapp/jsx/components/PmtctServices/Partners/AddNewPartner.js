import React, {useState, useEffect} from 'react';
import {Card,CardBody, FormGroup, Label, Input, InputGroup} from 'reactstrap';
import MatButton from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'
import CancelIcon from '@material-ui/icons/Cancel'
import axios from "axios";
import { toast} from "react-toastify";
import { url as baseUrl, token } from "./../../../../api";
//import { useHistory } from "react-router-dom";
import 'react-summernote/dist/react-summernote.css'; // import styles
import { Spinner } from "reactstrap";
import { Button,  } from 'semantic-ui-react'

const useStyles = makeStyles(theme => ({
    card: {
        margin: theme.spacing(20),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    cardBottom: {
        marginBottom: 20
    },
    Select: {
        height: 45,
        width: 350
    },
    button: {
        margin: theme.spacing(1)
    },

    root: {
        flexGrow: 1,
        "& .card-title":{
            color:'#fff',
            fontWeight:'bold'
        },
        "& .form-control":{
            borderRadius:'0.25rem',
            height:'41px'
        },
        "& .card-header:first-child": {
            borderRadius: "calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0"
        },
        "& .dropdown-toggle::after": {
            display: " block !important"
        },
        "& select":{
            "-webkit-appearance": "listbox !important"
        },
        "& p":{
            color:'red'
        },
        "& label":{
            fontSize:'14px',
            color:'#014d88',
            fontWeight:'bold'
        }
    },
    input: {
        display: 'none'
    }, 
    error: {
        color: "#f85032",
        fontSize: "11px",
    },
    success: {
        color: "#4BB543 ",
        fontSize: "11px",
    },
}))

const Labourpartner = (props) => {
    const patientObj = props.patientObj;
    //let history = useHistory();
    const classes = useStyles()
    const [saving, setSaving] = useState(false);
    const [errors, setErrors] = useState({});

    const [partner, setpartner]= useState({
                age: "",
                dateOfBirth: "",
                fullName: "",
                hbStatus: "",
                hcStatus: "",
                postTestCounseled: "",
                referredTo: "",
                syphillsStatus: "",
    })
    useEffect(() => {           
    }, [props.patientObj.id, ]);
    //Get list 
    const handleInputChangepartnerDto = e => {  
        setErrors({...errors, [e.target.name]: ""})            
        setpartner ({...partner,  [e.target.name]: e.target.value});
    }

    //FORM VALIDATION
    const validate = () => {
        let temp = { ...errors }
        temp.age = partner.age ? "" : "This field is required"
        temp.hbStatus = partner.hbStatus ? "" : "This field is required"
        temp.hcStatus = partner.hcStatus ? "" : "This field is required"
        temp.postTestCounseled = partner.postTestCounseled ? "" : "This field is required"

        setErrors({
            ...temp
            })    
        return Object.values(temp).every(x => x == "")
    }
    /**** Submit Button Processing  */
    const handleSubmit = (e) => {        
        e.preventDefault();        
        if(validate()){
        setSaving(true);
        axios.put(`${baseUrl}pmtct/anc/update-partnerinformation-in-anc/${props.patientObj.id}`, partner,
        { headers: {"Authorization" : `Bearer ${token}`}},
        
        )
            .then(response => {
                setSaving(false);
                //props.patientObj.commenced=true
                toast.success("Record save successful", {position: toast.POSITION.BOTTOM_CENTER});
                props.setActiveContent({...props.activeContent, route:'recent-history'})
            })
            .catch(error => {
                setSaving(false);
                toast.error("Something went wrong", {position: toast.POSITION.BOTTOM_CENTER});
                
            });
        }else{
            toast.error("All field are required", {position: toast.POSITION.BOTTOM_CENTER});
        } 
    }
    const LoadPage =()=>{    
        props.setActiveContent({...props.activeContent, route:'partners', id:"", actionType:""})
    }

  return (      
      <div >
         <Button
            variant="contained"
            color="primary"
            className=" float-end  mr-2 mt-2"
            onClick={()=>LoadPage()}
            style={{backgroundColor:"#014d88"}}
            //startIcon={<FaUserPlus size="10"/>}
        >
            <span style={{ textTransform: "capitalize" }}> Back</span>
        </Button>
        <br/><br/><br/>          
        <Card className={classes.root}>
            <CardBody>
            <form >
                <div className="row">
                    <h2>New Partner </h2>
                    
                    <div className="form-group mb-3 col-md-6">
                            <FormGroup>
                            <Label >ANC Number *</Label>
                            <InputGroup> 
                                <Input 
                                    type="text"
                                    name="ancNo"
                                    id="ancNo"
                                    onChange={handleInputChangepartnerDto}
                                    value={props.patientObj.ancNo} 
                                    disabled
                                />
                            </InputGroup>
                            {errors.ancNo !=="" ? (
                                    <span className={classes.error}>{errors.ancNo}</span>
                            ) : "" }
                            </FormGroup>
                    </div>
                    <div className="form-group mb-3 col-md-6">
                            <FormGroup>
                            <Label >Partner  Full Name *</Label>
                            <InputGroup> 
                                <Input 
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    onChange={handleInputChangepartnerDto}
                                    value={partner.fullName} 
                                    
                                />
                            </InputGroup>
                            {errors.fullName !=="" ? (
                                    <span className={classes.error}>{errors.fullName}</span>
                            ) : "" }
                            </FormGroup>
                    </div>
                    <div className="form-group mb-3 col-md-6">
                            <FormGroup>
                            <Label >Partner  age *</Label>
                            <InputGroup> 
                                <Input 
                                    type="Number"
                                    name="age"
                                    id="age"
                                    onChange={handleInputChangepartnerDto}
                                    value={partner.age} 
                                    
                                />
                            </InputGroup>
                            {errors.ancNo !=="" ? (
                                    <span className={classes.error}>{errors.ancNo}</span>
                            ) : "" }
                            </FormGroup>
                    </div>
                    <div className="form-group mb-3 col-md-6">
                            <FormGroup>
                            <Label >Pre-test Counseled *</Label>
                            <InputGroup> 
                            <Input 
                                    type="select"
                                    name="preTestCounseled"
                                    id="preTestCounseled"
                                    onChange={handleInputChangepartnerDto}
                                    value={partner.preTestCounseled} 
                                >
                                    <option value="" >Select</option>
                                    <option value="Yes" >Yes</option>
                                    <option value="No" >No</option>
                                </Input>
                            </InputGroup>
                            {errors.preTestCounseled !=="" ? (
                                    <span className={classes.error}>{errors.preTestCounseled}</span>
                            ) : "" }
                            </FormGroup>
                    </div>
                    <div className="form-group mb-3 col-md-6">
                            <FormGroup>
                            <Label >Partner accepts  HIV test</Label>
                            <InputGroup> 
                            <Input 
                                    type="select"
                                    name="acceptHivTest"
                                    id="acceptHivTest"
                                    onChange={handleInputChangepartnerDto}
                                    value={partner.acceptHivTest} 
                                >
                                    <option value="" >Select</option>
                                    <option value="Yes" >Yes</option>
                                    <option value="No" >No</option>
                                </Input>
                            </InputGroup>
                            {errors.acceptHivTest !=="" ? (
                                    <span className={classes.error}>{errors.acceptHivTest}</span>
                            ) : "" }
                            </FormGroup>
                    </div>
                    <div className="form-group mb-3 col-md-6">
                            <FormGroup>
                            <Label >Post-test counseled/ received test result</Label>
                            <InputGroup> 
                            <Input 
                                    type="select"
                                    name="postTestCounseled"
                                    id="postTestCounseled"
                                    onChange={handleInputChangepartnerDto}
                                    value={partner.postTestCounseled} 
                                >
                                    <option value="" >Select</option>
                                    <option value="Yes" >Yes</option>
                                    <option value="No" >No</option>
                                </Input>

                            </InputGroup>
                            {errors.postTestCounseled !=="" ? (
                                    <span className={classes.error}>{errors.postTestCounseled}</span>
                            ) : "" }
                            </FormGroup>
                    </div>
                    <div className="form-group mb-3 col-md-6">
                            <FormGroup>
                            <Label >HBV status</Label>
                            <InputGroup> 
                            <Input 
                                    type="select"
                                    name="hbStatus"
                                    id="hbStatus"
                                    onChange={handleInputChangepartnerDto}
                                    value={partner.hbStatus} 
                                >
                                    <option value="" >Select</option>
                                    <option value="Yes" >Yes</option>
                                    <option value="No" >No</option>
                                </Input>

                            </InputGroup>
                            {errors.hbStatus !=="" ? (
                                    <span className={classes.error}>{errors.hbStatus}</span>
                            ) : "" }
                            </FormGroup>
                    </div>
                    <div className="form-group mb-3 col-md-6">
                            <FormGroup>
                            <Label >HCV status</Label>
                            <InputGroup> 
                            <Input 
                                    type="select"
                                    name="hcStatus"
                                    id="hcStatus"
                                    onChange={handleInputChangepartnerDto}
                                    value={partner.hcStatus} 
                                >
                                    <option value="" >Select</option>
                                    <option value="Yes" >Yes</option>
                                    <option value="No" >No</option>
                                </Input>

                            </InputGroup>
                            {errors.hcStatus !=="" ? (
                                    <span className={classes.error}>{errors.hcStatus}</span>
                            ) : "" }
                            </FormGroup>
                    </div>
                    <div className="form-group mb-3 col-md-6">
                            <FormGroup>
                            <Label >Syphillis Status</Label>
                            <InputGroup> 
                            <Input 
                                    type="select"
                                    name="syphillisStatus"
                                    id="syphillisStatus"
                                    onChange={handleInputChangepartnerDto}
                                    value={partner.syphillisStatus} 
                                >
                                    <option value="" >Select</option>
                                    <option value="Yes" >Yes</option>
                                    <option value="No" >No</option>
                                </Input>

                            </InputGroup>
                            {errors.syphillisStatus !=="" ? (
                                    <span className={classes.error}>{errors.syphillisStatus}</span>
                            ) : "" }
                            </FormGroup>
                    </div>
                    <div className="form-group mb-3 col-md-6">
                            <FormGroup>
                            <Label >Referred To</Label>
                            <InputGroup> 
                                <Input 
                                    type="text"
                                    name="referredTo"
                                    id="referredTo"
                                    onChange={handleInputChangepartnerDto}
                                    value={partner.referredTo} 
                                />

                            </InputGroup>
                            {errors.referredTo !=="" ? (
                                    <span className={classes.error}>{errors.referredTo}</span>
                            ) : "" }
                            </FormGroup>
                    </div>
  
            </div>
                
                {saving ? <Spinner /> : ""}
            <br />
            
            <MatButton
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<SaveIcon />}
            style={{backgroundColor:"#014d88"}}
            onClick={handleSubmit}
            >
                {!saving ? (
                <span style={{ textTransform: "capitalize" }}>Save</span>
                ) : (
                <span style={{ textTransform: "capitalize" }}>Saving...</span>
                )}
            </MatButton>
            
            <MatButton
                variant="contained"
                className={classes.button}
                startIcon={<CancelIcon />}
                style={{backgroundColor:'#992E62'}}
            >
                <span style={{ textTransform: "capitalize" }}>Cancel</span>
            </MatButton>
            
                </form>
            </CardBody>
        </Card> 
                  
    </div>
  );
}

export default Labourpartner;
