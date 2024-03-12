import React from 'react'
import CeoInfo from './CeoInfo'
import TeamsInfo from './TeamsInfo'
import { teamCanada, teamSouthAfrica, teamCongo } from '../utils/constants'

function OurTeam() {
  return (
    <section>
      <CeoInfo />
      <div style={{ padding: '5rem 0' }}>
        <TeamsInfo theTeam={teamCanada} teamLocation="Canada" />
        <TeamsInfo theTeam={teamSouthAfrica} teamLocation="South Africa" />
        <TeamsInfo
          theTeam={teamCongo}
          teamLocation="Democratic Republic of Congo"
        />
      </div>
    </section>
  )
}

export default OurTeam
