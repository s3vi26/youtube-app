import React, { MouseEvent, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import { Button, Grid } from '@material-ui/core';
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
  })
);

export default function AgentCard({ agents }: AgentCardProps ): any {
  const classes = useStyles();
  const [selectedAgent, setSelectedAgent] = useState<string>('');

  const agentSelect = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event);
    // The button has the value aka name of agent. Getting the value wont work with e.target.value?
  }
  return (
    <div>
      <Filters />
      <Grid container className={classes.root} justify="center">
       <Grid item xs={12} className={classes.item}>
      <>
        {agents.map((agent, i) => {
          return <Button key={i} value={agent.name} onClick={agentSelect}>
              <Avatar alt={agent.name} variant="square" src={`./icons/${agent.name}.png`} className={classes.large} />
            </Button>
        })}
      </>
      </Grid>
      </Grid>
    </div>
  )
}