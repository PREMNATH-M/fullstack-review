import axios from "axios";
import React, { Component } from "react";

class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      <table border={1}>
      <thead>
        <tr>
          <th>id</th>
          <th>college_name</th>
          <th>city</th>
          
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.college_name}</td>
            <td>{user.city}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default Showdata;