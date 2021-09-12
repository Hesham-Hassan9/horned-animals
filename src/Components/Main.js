import React from "react";
import HornedAnimel from './HornedAnimel'

class Main extends React.Component {
  render(){
    return(
     <div>
       <HornedAnimel name={'Rhino Family'} imgSrc={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'} imgAlt={'Rhino Family'} imgTitale={'Rhino Family'} disc={'Mother (or father) rhino with two babies'}/>
       <HornedAnimel name={'Unicorn Head'} imgSrc={'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg'} imgAlt={'Unicorn Head'} imgTitale={'Unicorn Head'} disc={'Someone wearing a creepy unicorn head mask'}/>
     </div>
    )
  }
}

export default Main;