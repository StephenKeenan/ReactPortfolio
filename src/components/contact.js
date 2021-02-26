import Github from "../Assets/Github.jpg"
import Linkedin from "../Assets/LinkedIn.jpg"


function Contact() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <h2 className="title">Contact</h2>
                                    <hr />

                                    <p>EMAIL: <a href="mailto: stephenkeenan02@gmail.com">stephenkeenan02@gmail.com</a></p>
                                    <p>PHONE: (954) 319-6424</p>
                                    <div className="contact-links">
                                        <a href="https://github.com/StephenKeenan" target="_blank"><img src={Github} style={{ height: "175px", width: "175px" }}></img></a> &ensp;
                                <a href="https://www.linkedin.com/in/stephen-keenan-05b3311b3/" target="_blank"><img src={Linkedin} style={{ height: "175px", width: "175px" }}></img></a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        </main>
    )
};
export default Contact;