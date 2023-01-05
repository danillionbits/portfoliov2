import React from 'react';
import projects from 'content/projects';

const Projects = () => {
    return (
        <div>
            {projects && projects.map((project, index) => 
                <div>
                    <h3>
                        <a>{project.title}</a>
                    </h3>

                    <div>{project.description}</div>

                    <ul>
                        {project.skills.map((skill, index) => 
                            <li key={index}>{skill}</li>                        
                        )}
                    </ul>

                    <div>
                        <a href={project.url} aria-label="Github">
                            <Icon name="Github" />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;
