import React, { Component } from 'react';
import axios from 'axios';
// import Shipment from 'quote.js';
import Shipment from './shipment';
import Griddle from 'griddle-react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shipments: []
    };
  }

  componentDidMount() {
    axios.get(`https://gentle-escarpment-56373.herokuapp.com/allShipments`)
    .then(res => {
      console.log(res.data);
      this.setState({shipments: res.data})
    });
  }

  render() {
    return (
      <div className="quoteConainer">
        <Shipment />
        <Griddle  results={this.state.shipments} resultsPerPage={50} tableClassName="table" showFilter={true} columns={['orderNumber', 'sku', 'serial', 'qty', 'date', 'tracking']} showSettings={true}/>
      </div>
    );
  }
}
