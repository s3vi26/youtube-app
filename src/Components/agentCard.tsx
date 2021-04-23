import React, { ChangeEvent, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import { Grid, FormControl, FormControlLabel, Radio, RadioGroup, MenuItem, Select, InputLabel } from "@material-ui/core";
import { maps } from '../Data/maps';
import { Agent } from '../Data/agents';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    item: {
      maxWidth: '500px'
    },
    input: {
      display: 'none'
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      margin: theme.spacing(1)
    },
    selected: {
      border: '1px solid black',
      width: theme.spacing(7),
      height: theme.spacing(7),
      margin: theme.spacing(1)
    }
  })
);

export default function AgentCard({ agents }: Agent ): any {
  const classes = useStyles();
  const [selectedAgent, setSelectedAgent] = useState<string>('');
  const [skill, setSkill] = useState<string>('');
  const [theMap, setTheMap] = useState<string>("");

  const agentSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setSkill('');
    setSelectedAgent(event.target.value);
  }
  const skillChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSkill(event.target.value);
    console.log(event.target.value);
  }
  const mapChange = (event: ChangeEvent<{ value: any }>) => {
    setTheMap(event.target.value);
  }

  return (
    <div>
      <Grid container className={classes.root} justify="center">
      <Grid item xs={2}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="map-select">Map</InputLabel>
          <Select labelId="map-select" label="Map" onChange={mapChange} value={theMap}>
            {maps.map((map, i) => (
              <MenuItem key={i} value={map.name}>
                {map.name.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
       <Grid item xs={8} className={classes.item}>
        {agents.map((agent, i) => {
          return <Radio key={i} value={agent.name} color="primary" onChange={agentSelect} checked={selectedAgent === agent.name} icon={<Avatar alt={agent.name} variant="square" src={`./icons/${agent.name}.png`} className={classes.large} />} checkedIcon={<Avatar alt={agent.name} variant="square" src={`./icons/${agent.name}.png`} className={classes.selected} />} />
        })}
      </Grid>
      <Grid item xs={2} className={classes.item}>
        {selectedAgent && agents.filter(agent => agent.name === selectedAgent).map((filtered, i) => {
            const keys = Object.keys(filtered.skills);
            const names = Object.values(filtered.skills);
          return <RadioGroup key={i} value={skill} onChange={skillChange}>
          <FormControlLabel value={keys[0]} control={<Radio />} label={names[0]} />
          <FormControlLabel value={keys[1]} control={<Radio />} label={names[1]} />
          <FormControlLabel value={keys[2]} control={<Radio />} label={names[2]} />
          <FormControlLabel value={keys[3]} control={<Radio />} label={names[3]} />
        </RadioGroup>
        })}
      </Grid>
      </Grid>
    </div>
  )
}