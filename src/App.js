import React from "react";
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import SelectedHorns from './Components/SelectedHorns.js';
import Data from'./Components/data.json';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      dataOfBeasts: Data,
      clicked: {},
    };
  }
  show = (key) => {
    this.setState({
      show: true,
      clicked: this.state.dataOfBeasts[key]
    });
  };

  closeModal = () => {
    this.setState({
      show: false
    });
  };

  render(){
    return(
     <div>
       <Header/>
       <SelectedHorns show={this.state.show} closeModal={this.closeModal} dataToSelected={this.state.clicked} />
       <Main data={this.state.dataOfBeasts} show={this.show} />
       <Footer/>
     </div>
    )
  }
}

export default App;