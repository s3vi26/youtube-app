export type AgentType = {
  name: string;
  role: string;
  skills: {};
}

export const agents: AgentType[] = [
  {
    name: "Astra",
    role: "Controller",
    skills: {
      C: "Gravity Well",
      Q: "Nova Pulse",
      E: "Nebula / Dissipate",
      Ultimate: "Astral Form / Cosmic Divide"
    }
  },
  {
    name: "Breach",
    role: "Initiator",
    skills: {
      C: "Aftershock",
      Q: "Flashpoint",
      E: "Fault Line",
      Ultimate: "Rolling Thunder"
    }
  },  {
    name: "Brimstone",
    role: "Controller",
    skills: {
      C: "Stim Beacon",
      Q: "Incendiary",
      E: "Sky Smoke",
      Ultimate: "Orbital Strike"
    }
  },  {
    name: "Cypher",
    role: "Sentinel",
    skills: {
      C: "Trapwire",
      Q: "Cyber Cage",
      E: "Spycam",
      Ultimate: "Neural Theft"
    }
  },  {
    name: "Jett",
    role: "Duelist",
    skills: {
      C: "Cloudburst",
      Q: "Updraft",
      E: "Tailwind",
      Ultimate: "Blade Storm"
    }
  },  {
    name: "Killjoy",
    role: "Sentinel",
    skills: {
      C: "Nanoswarm",
      Q: "Alarmbot",
      E: "Turret",
      Ultimate: "Loackdown"
    }
  },  {
    name: "Omen",
    role: "Controller",
    skills: {
      C: "Shrouded Step",
      Q: "Paranoia",
      E: "Dark Cover",
      Ultimate: "From The Shadows"
    }
  },  {
    name: "Phoenix",
    role: "Duelist",
    skills: {
      C: "Blaze",
      Q: "Curveball",
      E: "Hot Hands",
      Ultimate: "Run It Back"
    }
  },  {
    name: "Raze",
    role: "Duelist",
    skills: {
      C: "Boom Bot",
      Q: "Blast Pack",
      E: "Paint Shells",
      Ultimate: "Showstopper"
    }
  },  {
    name: "Reyna",
    role: "Duelist",
    skills: {
      C: "Leer",
      Q: "Devour",
      E: "Dismiss",
      Ultimate: "Empress"
    }
  },  {
    name: "Sage",
    role: "Sentinel",
    skills: {
      C: "Barrier Orb",
      Q: "Slow Orb",
      E: "Healing Orb",
      Ultimate: "Resurrection"
    }
  },  {
    name: "Skye",
    role: "Initiator",
    skills: {
      C: "Regrowth",
      Q: "Trailblazer",
      E: "Guiding Light",
      Ultimate: "Seekers"
    }
  },  {
    name: "Sova",
    role: "Initiator",
    skills: {
      C: "Owl Drone",
      Q: "Shock Bolt",
      E: "Recon Bolt",
      Ultimate: "Hunter's Fury"
    }
  },  {
    name: "Viper",
    role: "Controller",
    skills: {
      C: "Snake Bite",
      Q: "Poison Cloud",
      E: "Toxic Screen",
      Ultimate: "Viper's Pit"
    }
  },  {
    name: "Yoru",
    role: "Duelist",
    skills: {
      C: "Fakeout",
      Q: "Blindside",
      E: "Gatecrash",
      Ultimate: "Dimensional Drift"
    }
  }
]