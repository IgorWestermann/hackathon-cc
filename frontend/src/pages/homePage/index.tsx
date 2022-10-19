import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Card from "../../components/card";

export default class Home extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        {/* <Routes /> */}
        <header className="App-header">
          <h1>Pages</h1>
        </header>
        <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid2 xs={6}>
            <Card title="Produtividade Individual" link="/prod-individual" />
          </Grid2>
          <Grid2 xs={6}>
            <Card title="Produtividade Time" link="/prod-time" />
          </Grid2>
        </Grid2>
      </div>
    );
  }
}
