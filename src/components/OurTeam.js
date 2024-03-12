import React from 'react'
import CeoInfo from './CeoInfo'
import TeamsInfo from './TeamsInfo'
import { teamCanada, teamSouthAfrica, teamCongo } from '../utils/constants'

function OurTeam() {
  return (
    <section style={{ paddingBottom: '6rem' }}>
      <CeoInfo />
      <TeamsInfo theTeam={teamCanada} teamLocation="Canada" />
      <TeamsInfo theTeam={teamSouthAfrica} teamLocation="South Africa" />
      <TeamsInfo
        theTeam={teamCongo}
        teamLocation="Democratic Republic of Congo"
      />
    </section>
  )
}

export default OurTeam
