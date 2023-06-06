import React from 'react'
import "./Projects.css";

const Projects = () => {
  return (
    <div>
        <h2>Project</h2>
        <h4>This is a list of my projects</h4>
        <div className='project'>
            <div className="row">
                <div className="col">
                <div class="card" >
  <img src="./images/rome.png" class="card-img-top" alt="rome"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>

                <div className="col">
                <div class="card" >
  <img src="./images/mexico.png" class="card-img-top" alt="mexico"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>

                <div className="col">
                <div class="card" >
  <img src="./images/bogota.png" class="card-img-top" alt="bogota"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects