import React, { Component } from 'react'
import fire from './firebase'
class Data extends Component {
    constructor(props) {    
        super(props);
       
        this.state = {employes : []}
        }
        
      componentDidMount() {         
          fire.database().ref("employee").on("value", snapshot => {
            let employeeDetails = [];
            snapshot.forEach(snap => {
                employeeDetails.push(snap.val());
            });
            this.setState({ employes: employeeDetails });
          });
        
        
     }
      
      render(){
      return (
        <div >
          <div>
              <table>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.employes.map(data => {
                      return (
                        <tr>     
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                        <td>{data.mobileNumber}</td>
                        </tr>        
                    );
                    })}
                </tbody>
             </table>
         </div>
        </div>
      );
    }
}

export default Data
