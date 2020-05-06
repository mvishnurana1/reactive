import React, { Component } from 'react';
import { cars } from './demo';
import { Header, Icon, List } from 'semantic-ui-react';
import { CarItem } from './CarItem';
import axios from 'axios';

class App extends Component {
  state = {
    values: [],
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/values').then((response) => {
      // console.log(response);
      this.setState({
        values: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {cars.map((car) => (
            <List.Item key={car.model}>
              <CarItem car={car} />
            </List.Item>
          ))}
        </List>

        <List>
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{(value.id, value.name)} </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
