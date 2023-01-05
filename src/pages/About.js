import React from 'react';

const About = () => {

    const skills = ["Javascript", "React", "Node.js", "MySQL", "Python"];

    return (
        <div>
            <p>
              Hello! My name is Brittany and I enjoy creating things that live on the internet. My
              interest in web development started back in 2012 when I decided to try editing custom
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot
              about HTML &amp; CSS!
            </p>

            <p>
              Fast-forward to today, and I’ve had the privilege of working at{' '}
              <a href="https://us.mullenlowe.com/">an advertising agency</a>,{' '}
              <a href="https://starry.com/">a start-up</a>,{' '}
              <a href="https://www.apple.com/">a huge corporation</a>, and{' '}
              <a href="https://scout.camd.northeastern.edu/">a student-led design studio</a>. My
              main focus these days is building accessible, inclusive products and digital
              experiences at <a href="https://upstatement.com/">Upstatement</a> for a variety of
              clients.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>

            <ul>
                {
                    skills && skills.map((skill, index) => 
                        <li key={index}>
                            {skill}
                        </li>
                    )
                }
            </ul>

            <img />
        </div>

    );
}

export default About;