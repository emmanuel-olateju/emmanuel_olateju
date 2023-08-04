import React from 'react';
import me from './emmanuel.jpg';

const About = () => {
    return (
        <div className='About'> 
            <div>
                <h1>
                    Emmanuel Olateju
                </h1>
                <p>
                    I am a recent graduate of Obafemi Awolowo University(OAU) with a BSc. in Electronics and Electrical Engineering. 
                    I am currently a research assistant at the 
                    <a href="https://appliedair.oauife.edu.ng">  A2IR2(Applied Artificial Intelligence and Robotics Research Laboratory)  </a>  at OAU.
                </p>
                <p>
                    <ul>
                        <li>
                            Focus: Developing 
                            state-of-the-art tools for medical diagnostics, 
                            rehabilitation, and human-computer interaction using 
                            electrophysiological signals and hardware devices.
                        </li>
                        <li>
                            Challenges: Data gathering, deployment, sustainability, 
                            and scalability of these solutions.
                        </li>
                        <li>
                            Impact: I believe that by addressing these 
                            challenges, they can develop solutions that are more 
                            accurate, reliable, and accessible.
                        </li>

                    </ul>
                </p>
            </div>
            <div>
                <img src={me} width={200} height={200} style={{ borderRadius: '50%' }}/>
            </div>
        </div>
    );
}

export default About;