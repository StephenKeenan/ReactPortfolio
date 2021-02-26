import Image from "../Assets/The Wedding Singer.jpg"
import Resume from "../Assets/Stephen Keenan Coding Resume.pdf"

function Home() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="title"> About Me</h2>
                                <hr />
                                <img className="photo" src={Image} alt="The Wedding Singer" />
                                <p>
                                    My name is Stephen Keenan, and I'm a coding student from Davie, Florida, just outside of
                                    Fort Lauderdale. I have a both BFA in Musical Theater and a Juris Doctorate from the
                                    University of Florida. I've worked as a professional actor and singer in both New York City
                                    and South Florida, and spent some time working as an assistant in the State Attorney's
                                    Office in Ocala, Florida. I am also an instrument-rated private pilot. I know, its a weird
                                    resume.
                        </p>

                                <p>
                                    In my limited free time, I enjoy gaming and watching movies with friends, as well as reading
                                    and walking through my neighborhood park. I also spend time doing local theater here in
                                    South Florida. I'm a big fan of the Florida Gators and the Pittsburgh Steelers, and love
                                    going to live hockey and baseball games. I have many friends and family involved in the tech
                                    industry, and I'm looking forward to learning more about coding.
                        </p>

                                <p>
                                    For more information, click here to see my <a href={Resume} target="_blank">resume!</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>

        </main>
    )
}
export default Home;