import React from 'react'

const About = () => {
  return (
    <main className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="text-center mb-4">About Me</h1>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Irfan</h5>
              <h6 className="card-subtitle mb-2 text-muted">Student at V.S.B Engineering College</h6>
              <p className="card-text">
                I am currently studying at V.S.B Engineering College, pursuing my passion for technology and innovation. 
                My goal is to become a skilled engineer and contribute to the field of technology.
              </p>
              <h5 className="mt-4">Skills</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Web Development</li>
                <li className="list-group-item">Data Structures</li>
                <li className="list-group-item">Problem Solving</li>
              </ul>
              <h5 className="mt-4">Interests</h5>
              <p>
                Apart from my studies, I'm passionate about coding, participating in hackathons, 
                and exploring new technologies. In my free time, I enjoy reading tech blogs and 
                contributing to open-source projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About