import React from "react";
import notebookLogo from "./notebook_logo.svg";

class DesignSlide extends React.Component {
    render() {
        return (
            <>
                <div className="designSlide container">
                    <img src={notebookLogo} alt="not found"></img>
                    <div className="designSlide__about">
                        <h2 className="designSlide__about-header">
                            Дизайн и верстка
                        </h2>
                        <p className="designSlide__about-text">
                            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
                        </p>
                        <button className="designSlide__about-btn">
                            написать мне
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default DesignSlide;