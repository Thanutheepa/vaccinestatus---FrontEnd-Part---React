import React,{Component, useState} from 'react';
//  import data from "../mock-data.json";
import '../components/BasicTable';
import BasicTable from '../components/BasicTable';
import NewApiCrud from './NewApiCrud';
import ShowApp from './ShowApp';
// import PostOrg from './PostOrg';
// import axios from 'axios';
// import ApiCrud from './ApiCrud';
// const Organizations=()=>{
//   const [contacts, setContacts]=useState(data);
// }


  class Organizations extends Component {
    
    constructor(props){
        super(props)
        this.state={
          
            name:'',
            address:'',
            phoneNumber:'',
            contactPerson:''
        }
        
       
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changePhoneNumberHandler=this.changePhoneNumberHandler.bind(this);
        this.changeContactPersonHandler=this.changeContactPersonHandler.bind(this);
        this.saveOrganizationsUser=this.saveOrganizationsUser.bind(this);
    }

    changeNameHandler=(event)=>{
        this.setState({name: event.target.value});
    }

    changeAddressHandler=(event)=>{
        this.setState({address: event.target.value});
    }

    changePhoneNumberHandler=(event)=>{
        this.setState({phoneNumber: event.target.value});
    }

    changeContactPersonHandler=(event)=>{
        this.setState({contactPerson: event.target.value});
    }

    saveOrganizationsUser=(e)=>{
        e.preventDefault();
        let organizationsUser={name: this.state.name,address: this.state.address,phoneNumber: this.state.phoneNumber, contactPerson: this.state.contactPerson};
        console.log('OrganizationsUser=>'+JSON.stringify(organizationsUser));
    }

    cancel(){
        this.props.history.push();
    }

    // Organizations=()=>{  
    //   axios.post('http://localhost:3000', {name:this.state.name,address:this.state.address,  
    //   phoneNumber:this.state.phoneNumber, contactPerson:this.state.contactPerson})  
    // .then(json => {  
    // if(json.data.Status==='Success'){  
    //   console.log(json.data.Status);  
    //   alert("Data Save Successfully");  
    // this.props.history.push()  
    // }  
    // else{  
    // alert('Data not Saved');  
    // debugger;  
    // this.props.history.push()  
    // }  
    // })  
    // }  

  render(){
    // <ApiCrud/>
    <NewApiCrud/>
  return (
    <div className='business'>

      <h1>Vaccine Business Registration Portal</h1>
      <h3><i>Hello Nizhar!</i></h3>
      <p>Welcome to this page. You can generate your checkin and checkout QR Code.  
        <strong><i> Please Register your business here first.</i></strong>
      </p>
      {/* <h2>Registration For Business</h2> */}
      <div className="container">
                <div className="row">
                    <br></br>
                    <h1 className="text-center">Organization Registration Form</h1>
                    <br></br>
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form>
                            
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input  placeholder="Enter the Organization's Name" name="name" className="form-control"
                                    value={this.state.name} onChange={this.changeNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Address:</label>
                                    <input placeholder="Enter the Organization's Address" name="address" className="form-control"
                                    value={this.state.address} onChange={this.changeAddressHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>PhoneNumber:</label>
                                    <input placeholder="Enter the Phone Number" name="phoneNumber" className="form-control"
                                    value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>ContactPerson:</label>
                                    <input placeholder="Drop the Contact Person Name" name="contactPerson" className="form-control"
                                    value={this.state.contactPerson} onChange={this.changeContactPersonHandler}/>
                                </div>
                                <br></br>
                                <br></br>
                                <button className="btn btn-success" onClick={this.saveOrganizationsUser}>Register</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div> 
                    </div>
                </div>
        </div>
        <h2>Registered Organizations Lists</h2>
        <BasicTable/>
         <ShowApp/>
         
         {/* <PostOrg/> */}
         {/* <Organization/> */}
        {/* <div className='App-container'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>PhoneNumber</th>
            <th>ContactPerson</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>(
            <tr>
            <td>Kiva</td>
            <td>LiyanegeStreet,Badulla</td>
            <td>0123456754</td>
            <td>Dr.Isuru</td>
          </tr>
          ))} 
          
        </tbody>
      </table>
    </div> */}
    
    </div>
  )
  }

}
  export default Organizations;