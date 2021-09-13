import React from "react";
import HornedAnimel from './HornedAnimel'
import Data from'./data.json';

class Main extends React.Component {
  render(){
  let newArray = Data.map((data, index) =>{
    return (
       <div  key ={index}>
         <HornedAnimel name={data.title} imgSrc={data.image_url} 
         imgAlt={data.keyword} imgTitale={data.title} disc={data.description}/>
       </div>
      )
  });
  return newArray
  // console.log(newArray);
}
}



export default Main;