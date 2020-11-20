import React, { Component } from "react";

export default class Ninjas extends Component {
  render() {
    // refer the components properties
    const { ninjas, deleteNinja } = this.props;
    
    // ninjas is the array created above
    // const ninjaList = ninjas.map(ninja =>{
    // if(ninja.age>21){
    //     return (
    //         // give  a specific id to do modification of the dom
    //         <div className="ninja" key={ninja.id}>
    //         <div>Name:{ninja.name}</div>
    //         <div>Age:{ninja.age}</div>
    //         <div>Belt:{ninja.belt}</div>
    //     </div>
    //     )
    // }
    // else{
    //     return null
    // }

    // })
    // console.log(this.props);
    // const {name, age, belt}= this.props;
    return (
      <div>
        {ninjas.map((ninja) => {
          // condition ? ():()
          return ninja.age > 21 ? (
            <div className="ninja" key={ninja.id}>
              <div>Name:{ninja.name}</div>
              <div>Age:{ninja.age}</div>
              <div>Belt:{ninja.belt}</div>
              <button onClick={()=>{deleteNinja(ninja.id)}}>Delete Ninja</button>
            </div>
          ) : null;
        })}
      </div>
    );
  }
}
