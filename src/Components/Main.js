import React from "react";
import HornedAnimel from './HornedAnimel'


class Main extends React.Component {
  render() {
    return (
      <div >
        {this.props.data.map((data, index) => {
          return (

            <HornedAnimel key={index} beastkey={index} name={data.title} imgSrc={data.image_url}
              imgAlt={data.keyword} imgTitale={data.title} disc={data.description} horns = {data.horns} show={this.props.show} />

          );
        })
        }
      </div>

    )
  }
}


export default Main;