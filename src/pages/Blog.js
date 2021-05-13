function Blog() {
    return (
        <div className="pageBg scroll fade-in">
            <div className="pageContent">
                <div className="header">
                    <h2><span className="orange">B</span>log</h2>
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

export default Blog