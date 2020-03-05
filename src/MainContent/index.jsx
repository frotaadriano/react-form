

import React, { Fragment, Component } from 'react';

import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';


class MainContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }
  render() { 
    const citySelectItems = [
      { label: 'New York', value: 'NY' },
      { label: 'Rome', value: 'RM' },
      { label: 'London', value: 'LDN' },
      { label: 'Istanbul', value: 'IST' },
      { label: 'Paris', value: 'PRS' }
    ];
    return (
      <Fragment>
        <Dropdown value={this.state.city} options={citySelectItems}
          onChange={(e) => { this.setState({ city: e.value }) }}
          placeholder="Select a City" />
        <div class="p-grid"  >
          <div class="p-col">
            <div class="box">0</div>
          </div>
          <div class="p-col">
            <div class="box">1</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MainContentComponent;