import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { ChangeEvent, useState } from "react";

// Skill Card
type SkillCardTypes = {
  keys: string[];
  names: string[];
}

export default function SkillCard (props: SkillCardTypes) {
  const [skill, setSkill] = useState('');
  const { keys, names } = props;
  const skillChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSkill(event.target.value);
  }
  
  
  return <RadioGroup value={skill} onChange={skillChange}>
    <FormControlLabel value={keys[0]} control={<Radio />} label={names[0]} />
    <FormControlLabel value={keys[1]} control={<Radio />} label={names[1]} />
    <FormControlLabel value={keys[2]} control={<Radio />} label={names[2]} />
    <FormControlLabel value={keys[3]} control={<Radio />} label={names[3]} />
  </RadioGroup>
}