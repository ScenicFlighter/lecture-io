import React from 'react';
import Grid from "hedron";

class Main extends React.Component {
  render() {
    return (
      <Grid.Provider
        padding="15px"
        breakpoints={{ sm: "-500", md: "501-750", lg: "+750" }}
      >
        <React.Fragment>
          <Grid.Bounds direction="horizontal">
            <Grid.Box>
              List
            </Grid.Box>
            <Grid.Box>
              Content
            </Grid.Box>
          </Grid.Bounds>
        </React.Fragment>
      </Grid.Provider>
    );
  }
}

export default Main;
