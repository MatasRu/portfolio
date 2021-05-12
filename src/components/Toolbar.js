import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

function Toolbar({get, set}) {

    const [getPage, setPage] = useState("about")

    useEffect(()=> {
        setPage(get)
    },[get])


    return (
        <div className="toolbar d-flex flex-column">
            <div className="toolbarMenu d-flex align-center flex-column">
                <div className="toolbarMenuDiv">
                    <span className="toolbarSpanHalf"/>
                    <span className="toolbarSpanFull"/>
                    <span className="toolbarSpanHalf"/>
                </div>
            </div>
            <div className="toolbarBtnFrame d-flex flex-column">
                <Link to="/" onClick={()=> set("about")} className={`toolbarBtn d-flex flex-center flex-column ${getPage === "about" ? "orange" : ""}`}>
                    <i className="fas fa-user"/>
                    <span>ABOUT</span>
                </Link>
                <span className="toolbarBtnBorder"/>
                <Link to="/Resume" onClick={()=> set("resume")} className={`toolbarBtn d-flex flex-center flex-column ${getPage === "resume" ? "orange" : ""}`}>
                    <i className="fas fa-tasks"/>
                    <span>RESUME</span>
                </Link>
                <span className="toolbarBtnBorder"/>
                <Link to="/Works" onClick={()=> set("works")} className={`toolbarBtn d-flex flex-center flex-column ${getPage === "works" ? "orange" : ""}`}>
                    <i className="fas fa-paint-brush"/>
                    <span>WORKS</span>
                </Link>
                <span className="toolbarBtnBorder"/>
                <Link to="/Blog" onClick={()=> set("blog")} className={`toolbarBtn d-flex flex-center flex-column ${getPage === "blog" ? "orange" : ""}`}>
                    <i className="far fa-comment-alt"/>
                    <span>BLOG</span>
                </Link>
                <span className="toolbarBtnBorder"/>
                <Link to="/Contact" onClick={()=> set("contact")} className={`toolbarBtn d-flex flex-center flex-column ${getPage === "contact" ? "orange" : ""}`}>
                    <i className="far fa-envelope-open"/>
                    <span>CONTACT</span>
                </Link>
            </div>


        </div>
    )
}

export default Toolbar