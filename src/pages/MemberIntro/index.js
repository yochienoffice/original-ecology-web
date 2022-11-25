import React, { useState } from 'react'
import MemberCard from './components/MemberCard';
import './index.css';

function MemberIntro() {
  const [member, setMember] = useState({name:"yoyo"});
  return (
    <div className='eco-memberintro-container'>
      member intro
      <MemberCard member={{name:"Yoyo", style: "left"}}/>
      <MemberCard member={{name:"Jasmine", style: "left"}}/>
      <MemberCard member={{name:"Daniel", style: "right"}}/>
      <MemberCard member={{name:"Mike", style: "mid"}}/>
    </div>
  )
}

export default MemberIntro;
