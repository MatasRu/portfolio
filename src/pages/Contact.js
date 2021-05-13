function Contact() {
    return (
        <div className="pageBg scroll fade-in">
            <div className="pageContent">
                <div className="header">
                    <h2><span className="orange">Get</span> in Touch</h2>
                    <div className="headerBorder"/>
                    <iframe title="Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1648828.3931322368!2d24.166556851115953!3d55.19824116399944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2sVilnius!5e0!3m2!1slt!2slt!4v1620907020391!5m2!1slt!2slt"
                            style={{marginTop: "30px", width: "97%", height: "250px", border: 0}}/>

                    <div className="d-flex content-font">
                        <div className="about d-flex flex-column">
                            <p>ADDRESS.......<span className="grey">Vilnius</span></p>
                            <p>PHONE.......<span className="grey">+370 65855599</span></p>
                        </div>
                        <div className="about d-flex flex-column">
                            <p>EMAIL.......<span className="grey">Matas@Rudaminas.lt</span></p>
                            <p>FREELANCE.......<span className="grey">Available</span></p>
                        </div>
                    </div>
                </div>
                <div className="header mt-75">
                    <h2><span className="orange">Contact</span> Form</h2>
                    <div className="headerBorder"/>
                    <div className="email">
                        <div className="d-flex j-space">
                            <input style={{height:"30px", width:"45%"}} type="text" placeholder="Full Name"/>
                            <input style={{width:"45%"}} type="text" placeholder="Email Address"/>
                        </div>
                        <div className="mt-20 d-flex flex-column">
                            <textarea className="text-input" placeholder="Your Text" name="text" rows="3" />
                            <div className="d-flex mt-20 j-center">
                                <span className="mt-20 send">Send Message</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

