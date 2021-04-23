import React, { ChangeEvent, useState } from "react";
import { maps } from '../Data/maps';
import { Button, Grid, MenuItem, Select, Typography } from "@material-ui/core";

const Filters = () => {
  const [theMap, setTheMap] = useState("");
  
  const handleMapChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTheMap(event.target.value);
  }

  const clearFilters = () => {
    setTheMap("");
  }
  return (
    <Grid container>
      <Grid item xs={2}>
        <Typography variant="h5" color="secondary">
          Filter By:
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="subtitle2">Map</Typography>
        <Select id="mapFilter" value={theMap}>
          {maps.map((map, i) => (
            <MenuItem key={i} value={map.name}>
              {map.name.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle2">Reset</Typography>
        <Button
          onClick={clearFilters}
          variant="outlined"
          color="primary"
          id="clearButton"
        >
          Clear
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filters;