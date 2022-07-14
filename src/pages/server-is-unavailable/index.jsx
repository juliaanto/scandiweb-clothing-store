import { AppRoute } from '../../const';
import Block from './server-is-unavailable.styled';
import React from 'react';

class ServerIsUnavailable extends React.Component {
  render() {
    return (
      <Block>
        <Block.Text>Server is unavailable</Block.Text>
        <Block.Link to={AppRoute.Main} onClick={window.location.reload}>Try again</Block.Link>
      </Block>
    )
  }
}

export default ServerIsUnavailable;