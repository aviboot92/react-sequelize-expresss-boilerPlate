import React, { Component } from "react";
import API from "../../utils/API";

class Service extends Component{
    state = {
        listOf :[]
    };

    componentDidMount() {
        this.loadServices();
      }

      loadServices = () => {
        API.getService()
          .then(res =>
            this.setState({ listOf: res.data })
          )
          .catch(err => console.log(err));
      };

      render(){
          console.log(this.state.listOf);

          return(
              <ul>
                {this.state.listOf.map(item =>{
                   return <li>{item.service}</li>
                }) 
                }
              </ul>
          )
      }
}

export default Service;