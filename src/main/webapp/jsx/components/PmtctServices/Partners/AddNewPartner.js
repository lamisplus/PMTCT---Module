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

const LabourDelivery = (props) => {
    const patientObj = props.patientObj;
    //let history = useHistory();
    const classes = useStyles()
    const [saving, setSaving] = useState(false);
    const [errors, setErrors] = useState({});

    const [delivery, setDelivery]= useState({

                ancNo: patientObj.ancNo,
                artStartedLdWard: "",
                bookingStatus: "",
                childGivenArvWithin72: "",
                childStatus: "",
                dateOfDelivery: "",
                deliveryTime: "",
                episiotomy: "",
                feedingDecision: "",
                gaweeks: "",
                hbstatus: "",
                hcstatus: "",
                hivExposedInfantGivenHbWithin24hrs: "",
                maternalOutcome: "",
                modeOfDelivery: "",
                onArt: "",
                referalSource: "",
                romDeliveryInterval: "",
                vaginalTear: ""
    })
    useEffect(() => {           
    }, [props.patientObj.id, ]);
    //Get list 
    const handleInputChangeDeliveryDto = e => {  
        setErrors({...errors, [e.target.name]: ""})            
        setDelivery ({...delivery,  [e.target.name]: e.target.value});
    }

    //FORM VALIDATION
    const validate = () => {
        let temp = { ...errors }
        temp.artStartedLdWard = delivery.artStartedLdWard ? "" : "This field is required"
        temp.referalSource = delivery.referalSource ? "" : "This field is required"
        temp.romDeliveryInterval = delivery.romDeliveryInterval ? "" : "This field is required"
        temp.vaginalTear = delivery.vaginalTear ? "" : "This field is required"
        temp.onArt = delivery.onArt ? "" : "This field is required"
        temp.modeOfDelivery = delivery.modeOfDelivery ? "" : "This field is required"
        temp.maternalOutcome = delivery.maternalOutcome ? "" : "This field is required"
        temp.hivExposedInfantGivenHbWithin24hrs = delivery.hivExposedInfantGivenHbWithin24hrs ? "" : "This field is required"
        temp.hcstatus = delivery.hcstatus ? "" : "This field is required"
        temp.hbstatus = delivery.hbstatus ? "" : "This field is required"
        temp.gaweeks = delivery.gaweeks ? "" : "This field is required"
        temp.feedingDecision = delivery.feedingDecision ? "" : "This field is required"
        temp.episiotomy = delivery.episiotomy ? "" : "This field is required"
        temp.deliveryTime = delivery.deliveryTime ? "" : "This field is required"
        temp.dateOfDelivery = delivery.dateOfDelivery ? "" : "This field is required"
        temp.childStatus = delivery.childStatus ? "" : "This field is required"
        temp.childGivenArvWithin72 = delivery.childGivenArvWithin72 ? "" : "This field is required"
        temp.bookingStatus = delivery.bookingStatus ? "" : "This field is required"
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
        axios.post(`${baseUrl}pmtct/anc/pmtct-delivery`, delivery,
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
        props.setActiveContent({...props.activeContent, route:'add-partner', id:"", actionType:""})
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
                            <Label >Partner  age *</Label>
                            <InputGroup> 
                                <Input 
                                    type="Number"
                                    name="givenName"
                                    id="ancNo"
                                    onChange={handleInputChangeDeliveryDto}
                                    value={delivery.ancNo} 
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
                            <Label >Pre-test counseled *</Label>
                            <InputGroup> 
                            <Input 
                                    type="select"
                                    name="episiotomy"
                                    id="episiotomy"
                                    onChange={handleInputChangeDeliveryDto}
                                    value={delivery.episiotomy} 
                                >
                                    <option value="" >Select</option>
                                    <option value="Yes" >Yes</option>
                                    <option value="No" >No</option>
                                </Input>
                            </InputGroup>
                            {errors.ancNo !=="" ? (
                                    <span className={classes.error}>{errors.ancNo}</span>
                            ) : "" }
                            </FormGroup>
                    </div>
                    <div className="form-group mb-3 col-md-6">
                            <FormGroup>
                            <Label >Partner accepts  HIV test</Label>
                            <InputGroup> 
                            <Input 
                                    type="select"
                                    name="episiotomy"
                                    id="episiotomy"
                                    onChange={handleInputChangeDeliveryDto}
                                    value={delivery.episiotomy} 
                                >
                                    <option value="" >Select</option>
                                    <option value="Yes" >Yes</option>
                                    <option value="No" >No</option>
                                </Input>
                            </InputGroup>
                            {errors.bookingStatus !=="" ? (
                                    <span className={classes.error}>{errors.bookingStatus}</span>
                            ) : "" }
                            </FormGroup>
                    </div>
                    <div className="form-group mb-3 col-md-6">
                            <FormGroup>
                            <Label >Post-test counseled/ received test result</Label>
                            <InputGroup> 
                            <Input 
                                    type="select"
                                    name="episiotomy"
                                    id="episiotomy"
                                    onChange={handleInputChangeDeliveryDto}
                                    value={delivery.episiotomy} 
                                >
                                    <option value="" >Select</option>
                                    <option value="Yes" >Yes</option>
                                    <option value="No" >No</option>
                                </Input>

                            </InputGroup>
                            {errors.dateOfDelivery !=="" ? (
                                    <span className={classes.error}>{errors.dateOfDelivery}</span>
                            ) : "" }
                            </FormGroup>
                    </div>
                    <div className="form-group mb-3 col-md-6">
                            <FormGroup>
                            <Label >HBV status</Label>
                            <InputGroup> 
                            <Input 
                                    type="select"
                                    name="episiotomy"
                                    id="episiotomy"
                                    onChange={handleInputChangeDeliveryDto}
                                    value={delivery.episiotomy} 
                                >
                                    <option value="" >Select</option>
                                    <option value="Yes" >Yes</option>
                                    <option value="No" >No</option>
                                </Input>

                            </InputGroup>
                            {errors.gaweeks !=="" ? (
                                    <span className={classes.error}>{errors.gaweeks}</span>
                            ) : "" }
                            </FormGroup>
                    </div>
                    <div className="form-group mb-3 col-md-6">
                            <FormGroup>
                            <Label >HCV status</Label>
                            <InputGroup> 
                            <Input 
                                    type="select"
                                    name="episiotomy"
                                    id="episiotomy"
                                    onChange={handleInputChangeDeliveryDto}
                                    value={delivery.episiotomy} 
                                >
                                    <option value="" >Select</option>
                                    <option value="Yes" >Yes</option>
                                    <option value="No" >No</option>
                                </Input>

                            </InputGroup>
                            {errors.gaweeks !=="" ? (
                                    <span className={classes.error}>{errors.gaweeks}</span>
                            ) : "" }
                            </FormGroup>
                    </div>
                    <div className="form-group mb-3 col-md-6">
                            <FormGroup>
                            <Label >Syphillis Status</Label>
                            <InputGroup> 
                            <Input 
                                    type="select"
                                    name="episiotomy"
                                    id="episiotomy"
                                    onChange={handleInputChangeDeliveryDto}
                                    value={delivery.episiotomy} 
                                >
                                    <option value="" >Select</option>
                                    <option value="Yes" >Yes</option>
                                    <option value="No" >No</option>
                                </Input>

                            </InputGroup>
                            {errors.gaweeks !=="" ? (
                                    <span className={classes.error}>{errors.gaweeks}</span>
                            ) : "" }
                            </FormGroup>
                    </div>
                    <div className="form-group mb-3 col-md-6">
                            <FormGroup>
                            <Label >Referred To</Label>
                            <InputGroup> 
                                <Input 
                                    type="text"
                                    name="gaweeks"
                                    id="gaweeks"
                                    onChange={handleInputChangeDeliveryDto}
                                    value={delivery.gaweeks} 
                                />

                            </InputGroup>
                            {errors.gaweeks !=="" ? (
                                    <span className={classes.error}>{errors.gaweeks}</span>
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

export default LabourDelivery;
