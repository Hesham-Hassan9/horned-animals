import React from "react";

class HornedAnimel extends React.Component {
  render(){
    return(
     <>
       <div>
       <h2>{this.props.name}</h2>
       <img src={this.props.imgSrc} alt={this.props.imgAlt} title={this.props.imgTitale}/>
       <p>{this.props.disc}</p>
       </div>
     </>
    )
  }
}

export default HornedAnimel;