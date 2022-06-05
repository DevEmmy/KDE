import React from 'react'
import Nav from '../Navigator/Nav'
import { AboutContainer, LandingPageContainer } from '../Styles/LandingPage.styled'
import {members} from '../Assets/Details/members'
import Footer from './Footer'

function About() {
  return (
    <LandingPageContainer>
        <Nav />

          <AboutContainer>
            <h3>King David Elites</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, corporis sunt maiores ullam veritatis, incidunt vel distinctio quidem modi ratione dignissimos deserunt quibusdam fugiat. Necessitatibus illo nam eveniet sint, neque praesentium voluptates. Nihil iure enim quaerat beatae sed, architecto reprehenderit maxime eum sapiente labore cupiditate expedita perferendis, veniam, placeat molestiae quas quia numquam. Porro provident quam aliquam, corporis quia, soluta obcaecati veritatis ipsa sapiente reprehenderit possimus ut ad voluptas, dicta mollitia distinctio sequi cupiditate! Dignissimos maxime aliquam illum a! Minima distinctio, assumenda, in molestiae natus vero quisquam eos sequi dolorum culpa cumque eaque voluptate facere non. Non ullam blanditiis praesentium illum labore doloribus, molestias necessitatibus nihil, qui omnis eligendi quaerat magni reprehenderit, ea nostrum itaque fugit adipisci laborum at est culpa ducimus voluptatum? Excepturi ut, quo odio voluptates impedit voluptatibus, eveniet rerum eaque molestias maiores minima voluptate odit vel praesentium voluptatum fuga, quam earum nesciunt labore adipisci? Aliquid sint asperiores tenetur, eveniet hic inventore corrupti! Dolorum quos inventore pariatur debitis! Iste, voluptatum quae? At ex cumque illum rem accusamus laboriosam illo necessitatibus, voluptas doloribus ab iure unde laudantium cupiditate dolore placeat laborum eligendi ad deleniti quasi, dolorem hic! Atque molestiae veritatis sequi ducimus consequuntur eligendi qui aspernatur exercitationem temporibus iure.
            </p>

            <h3>Members</h3>

            <div className="members">

               {
              members.map((member, i)=>{
                return(
                  <div className="member">
                    <img src={member.img} alt="" />

                    <div className="text_content">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>

                    </div>
                  </div>
                )
              })
            }
            </div>

           
          </AboutContainer>

        <Footer />
    </LandingPageContainer>
  )
}

export default About