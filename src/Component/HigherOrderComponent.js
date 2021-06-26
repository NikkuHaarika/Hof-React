import React, { Component } from 'react'

export default class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
  
// display all items
renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
              <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;
};


renderUsertype = () => {
    const data = this.state.userData;
    const mapRows = data.filter((item) => {
         if(item.user_type == "Designer")
          return item;
    }).map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
               <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
              
           </li>
        </React.Fragment>
    ));
    return mapRows;
};

renderLetter = () => {
    const data = this.state.userData;
    const mapRows = data.filter((item) => {
         if(item.name.charAt(0) == 'J')
          return item;
    }).map((item) =>(
        <React.Fragment key={item.id}>
            <li className="list-elements">
               <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
              
           </li>
        </React.Fragment>
    ));
    return mapRows;
}

renderAge = () =>{
    const data=this.state.userData;
    const mapRows=data.filter((item) =>{
        if(item.age > 28 && item.age <= 50)
         return item;
    }).map((item) => (
        <React.Fragment key={item.id}>
        <li className="list-elements">
           <span>Id: {item.id}</span>
            <span> Name : {item.name}</span>
            <span> User Type: {item.user_type}</span>
          <span> Age: {item.age}</span>
       </li>
    </React.Fragment>

    ));
    return mapRows;
}

renderExperience = () =>{
    var val;
    const data=this.state.userData;
    const mapRows=data.filter((item) =>{
        if(item.user_type == "Designer")
         return item;
    }).map((item) => {
        return item.years;
    }).reduce((item,crrval)=>{
      return item=item+crrval;
    },0);
     return mapRows;
}

 render() {
        return (
          
          <React.Fragment>
            <h1>Display all items</h1>
            <div className="display-box">
            <ul>{this.renderItems()} </ul>
            </div>
            <h1>Display based on type</h1>
            <div className="display-box">
            <ul>{this.renderUsertype()} </ul>
            </div>
            <h1>Display based on letter</h1>
            <div className="display-box">
            <ul>{this.renderLetter()} </ul>
            </div>
            <h1>Display based on age</h1>
            <div className="display-box">
            <ul>{this.renderAge()} </ul>
            </div>
            <h1>Display experience</h1>
            <div className="display-box">
            <ul>{this.renderExperience()} </ul>
            </div>
          </React.Fragment>
        )
    }
}
