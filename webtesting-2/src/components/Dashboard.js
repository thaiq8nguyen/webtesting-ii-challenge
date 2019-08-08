import React from "react";
import { Button } from "semantic-ui-react";
const Dashboard = ({ strike, ball, foul, hit }) => {
  return (
    <div>
      <Button.Group>
        <Button onClick={strike}>Strike</Button>
        <Button onClick={ball}>Ball</Button>
        <Button onClick={foul}>Foul</Button>
        <Button onClick={hit}>Hit</Button>
      </Button.Group>
      <br />
      <br />
      <Button negative>Reset</Button>
    </div>
  );
};

export default Dashboard;
