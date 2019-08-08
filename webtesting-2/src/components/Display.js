import React from "react";
import { Message } from "semantic-ui-react";
const Display = ({ balls, strikes, fouls, hits }) => {
  return (
    <div>
      <Message>
        <Message.Header>Data</Message.Header>
        <Message.List>
          <Message.Item>Number of balls: {balls}</Message.Item>
          <Message.Item>Number of strikes: {strikes}</Message.Item>
          <Message.Item>Number of fouls: {fouls}</Message.Item>
          <Message.Item>Number of hits: {hits}</Message.Item>
        </Message.List>
      </Message>
    </div>
  );
};

export default Display;
