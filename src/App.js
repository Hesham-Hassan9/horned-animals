import React from "react";
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import SelectedHorns from './Components/SelectedHorns.js';
import Data from './Components/data.json';
import SelectedForm from "./Components/SelectedForm";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataOfBeasts: Data,
      clicked: {},
      horns: '',
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

  hornforFilter = (value) => this.setState({ horns: Number(value)});

  filter = () => {
    let newBeasts = Data.filter( beast => beast.horns === this.state.horns );
    this.setState({
      dataOfBeasts: newBeasts
    });
  }

  render() {
    return (
      <div>
        <Header />
        <SelectedForm hornforFilter={this.hornforFilter} filter={this.filter}/>
        <SelectedHorns show={this.state.show} closeModal={this.closeModal} dataToSelected={this.state.clicked} />
        <Main data={this.state.dataOfBeasts} show={this.show} />
        <Footer select={this.state.dataOfBeasts} />
      </div>
    )
  }
}

export default App;