import React, { ChangeEvent, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import { Button, Grid } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import Filters from './Filters';

type AgentCardProps = {
  agents: { name: string; role: string;}[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
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

export default function AgentCard({ agents }: AgentCardProps ): any {
  const classes = useStyles();
  const [selectedAgent, setSelectedAgent] = useState<string>('');

  const agentSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedAgent(event.target.value);
    console.log(event.target.value);
    // The button has the value aka name of agent. Getting the value wont work with e.target.value?
  }
  return (
    <div>
      {/* <Filters /> */}
      <Grid container className={classes.root} justify="center">
       <Grid item xs={12} className={classes.item}>
      <>
        {agents.map((agent, i) => {
          return <Radio key={i} value={agent.name} color="primary" onChange={agentSelect} checked={selectedAgent === agent.name} icon={<Avatar alt={agent.name} variant="square" src={`./icons/${agent.name}.png`} className={classes.large} />} checkedIcon={<Avatar alt={agent.name} variant="square" src={`./icons/${agent.name}.png`} className={classes.selected} />} />
        })}
      </>
      </Grid>
      </Grid>
    </div>
  )
}