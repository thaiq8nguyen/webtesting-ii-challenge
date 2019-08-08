import React, { useState, useEffect } from "react";
import { Header, Grid } from "semantic-ui-react";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [hits, setHits] = useState(0);
  const [fouls, setFouls] = useState(0);

  /* Count Rule # 1 */
  useEffect(() => {
    if (strikes === 3 || balls === 4) {
      setBalls(0);
      setStrikes(0);
    }
  }, [strikes, balls]);

  /* Count Rule # 2 */
  useEffect(() => {
    setBalls(0);
    setStrikes(0);
  }, [hits]);

  const handleStrikes = () => {
    setStrikes(strikes + 1);
  };
  const handleBalls = () => {
    setBalls(balls + 1);
  };
  const handleFouls = () => {
    setFouls(fouls + 1);

    if (strikes < 2) {
      setStrikes(strikes + 1);
    }
  };
  const handleHits = () => {
    setHits(hits + 1);
  };

  return (
    <div className="App">
      <Header>Baseball Controller</Header>
      <Grid divided="vertically" container>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Header as={"h2"}>Dashboard</Header>
            <Dashboard
              strike={handleStrikes}
              ball={handleBalls}
              foul={handleFouls}
              hit={handleHits}
            />
          </Grid.Column>
          <Grid.Column>
            <Header as={"h2"}>Display</Header>
            <Display
              balls={balls}
              strikes={strikes}
              hits={hits}
              fouls={fouls}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
