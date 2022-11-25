import React from 'react'

function MemberCard({member}) {
  // console.log(member);
  // const text = document.querySelector('.text p');
  // text.innerHTML = text.innerHTML.split("").map(
  //   (char, i) => 
  //   `<span style="transform:rotate(${i * 5}deg)">${char}</span>`
  // ).join("");
  if(member && member.style) {
    switch(member.style) {
      case "left":
        return (
          <div className='eco-member-container'>
              <div className='intro-body'>
                <div className='circle'>
                  <div className='logo'>
                    <div className='text'>
                      <p>Frontend Develper-{member.name}</p>
                    </div>
                  </div>
                </div>
                <div className='intro-content'>
                </div>
              </div>
          </div>
        )
      case "right":
        return (
          <div className='eco-member-container'>
              <div className='intro-body'>
                <div className='intro-content-right'>
                </div>
                <div className='circle'>
                  <div className='logo'>
                    <div className='text'>
                      <p>Frontend Develper-Jonathan Chien</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        )
      default:
        return (
          <div className='eco-member-container'>
              <div className='intro-body'>
                <div className='circle'>
                  <div className='logo'>
                    <div className='text'>
                      <p>Frontend Develper-Jonathan Chien</p>
                    </div>
                  </div>
                </div>
                <div className='intro-content'>
                </div>
              </div>
          </div>
        ) 
    }
  }
}

export default MemberCard;
