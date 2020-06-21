import React from 'react';
import {Container} from 'unstated';

type MainState = {
  count: number;
};
export class MainStore extends Container<MainState> {
  state = {count: 0};
  increment = () => {
    this.setState({count: this.state.count + 1});
  };
  decrement = () => {
    this.setState({count: this.state.count - 1});
  };
}
