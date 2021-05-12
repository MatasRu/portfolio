import {Link} from "react-router-dom";
import Type from "./Type"

function Card({set}) {

    return (
        <div>
            <div className="card d-flex flex-column">
                <div className="userBg"/>
                <div className="userBgLeft"/>
                <div className="userBgRight"/>
                <div className="userPhoto"/>
                <div className="userInfo d-flex flex-center flex-column">
                    <h1>Matas Rudaminas</h1>
                    <Type />
                    <div className="d-flex favIcons">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-stack-overflow"></i>
                        <i className="fab fa-facebook-square"></i>

                    </div>
                </div>
                <div className="userBtnBorder"/>
                <div className="d-flex flex-center">
                    <div className="userBtn d-flex flex-center">DOWNLOAD CV</div>
                    <div className="userBtnBorder2"/>
                    <Link to="/Contact" onClick={() => set("contact")} className="userBtn d-flex flex-center">CONTACT ME</Link>
                </div>

            </div>
            <div className="cardBg d-flex flex-column"/>
        </div>

    )
}

export default Card