import Parks from "../Assets/National Parks.JPG"
import Password from "../Assets/Password Generator.JPG"
import Workday from "../Assets/Work Day Scheduler.JPG"
import Notetaker from "../Assets/NoteTaker.JPG"
import Weather from "../Assets/Weather Dashboard.JPG"
import Template from "../Assets/Template Engine.JPG"

function Portfolio() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className="card">
              <div className="card-body">
                <h2 className="title">Portfolio</h2>
                <hr />
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card border-0">
                      <a href="https://jackparisi.github.io/Group-5-Project-1/" target="_blank">
                        <img className="card-img-top" src={Parks} width="200"
                          height="225" alt="National Park Finder Screenshot"></img>
                        <div className="stripe">
                          National Park Finder
                                        </div>
                      </a>
                      <a className="btn btn-primary" href="https://github.com/StephenKeenan/Group-5-Project-1"
                        target="_blank" role="button">See the code on GitHub</a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card border-0">
                      <a href="https://stephenkeenan.github.io/JavascriptPasswordGenerator/"
                        target="_blank">
                        <img className="card-img-top" src={Password} width="200"
                          height="225" alt="Password Generator Screenshot"></img>
                        <div className="stripe">
                          Password Generator
                                        </div>
                      </a>
                      <a className="btn btn-primary"
                        href="https://github.com/StephenKeenan/JavascriptPasswordGenerator"
                        target="_blank" role="button">See the code on GitHub</a>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="card border-0">
                      <a href="https://stephenkeenan.github.io/DatePlanner/" target="_blank">
                        <img className="card-img-top" src={Workday} width="200"
                          height="225" alt="Work Day Scheduler Screenshot"></img>
                        <div className="stripe">
                          Work Day Planner
                                        </div>
                      </a>
                      <a className="btn btn-primary" href="https://github.com/StephenKeenan/DatePlanner"
                        target="-blank" role="button">See the code in GitHub</a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card border-0">
                      <a href="https://tranquil-journey-96421.herokuapp.com/" target="_blank">
                        <img className="card-img-top" src={Notetaker} width="200"
                          height="225" alt="Note Taker Screenshot"></img>
                        <div className="stripe">
                          Note Taker
                                        </div>
                      </a>
                      <a className="btn btn-primary" href=" https://github.com/StephenKeenan/Note-Taker" target="_blank" role="button">See the code in
                                        GitHub</a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card border-0">
                      <a href="https://stephenkeenan.github.io/WeatherPortfolio/" target="_blank">
                        <img className="card-img-top" src={Weather} width="200"
                          height="225" alt="National Park Finder Screenshot"></img>
                        <div className="stripe">
                          Weather Dashboard
                                        </div>
                      </a>
                      <a className="btn btn-primary" href="https://github.com/StephenKeenan/WeatherPortfolio"
                        target="_blank" role="button">See the code on GitHub</a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card border-0">
                      <a href=" https://www.youtube.com/watch?v=FzOv4sTkO0k&feature=youtu.be" target="_blank">
                        <img className="card-img-top" src={Template} width="200"
                          height="225" alt="Template Engine Screenshot"></img>
                        <div className="stripe">
                          Employee Summary Template Engine
                                        </div>
                      </a>
                      <a className="btn btn-primary" href="https://github.com/StephenKeenan/Template-Engine-Employee-Summary"
                        target="_blank" role="button">See the code on GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </main>
  )
}

export default Portfolio;