import React from 'react';
import css_logo from '../images/css3.png';
import js_logo from '../images/js.png';
import react_logo from '../images/React.png';
import html_logo from '../images/html5.png'


const Information = () => {
    return (
        <div className="about">
            <div className="about__title">
                <h1>About me</h1>
            </div>
            <div className="about__photo">
                <div className="about__photo_circle"></div>
            </div>
            <div className="about__description">
                <div className="about__description_text">Привет, меня зовут Александр и я хочу вам представить своё музыкальное
                <br />
                приложение  наподобие Spotify. В качестве front-end разработчика, я 
                <br />
                отвественен за создание удобного и привлекательного интерфейса приложения,
                <br />
                который позволяет пользователям наслаждаться музыкой без усилий. Это
                <br />
                мой первый проект на реакт, который у меня получилось реализовать.</div>
            </div>
            <div className="about__stack">
                <div className="about__stack_title">
                    <h2>
                        Мой стек:
                    </h2>
                </div>
                <div className="about__stack_logos">
                    <div className="about__stack_logos_circle" id="html">
                        <img src={html_logo} alt="html" />
                    </div>
                    <div className="about__stack_logos_circle" id='css'>
                        <img src={css_logo} alt="css" />
                    </div>
                    <div className="about__stack_logos_circle" id='js'>
                        <img src={js_logo} alt="js" />
                    </div>
                    <div className="about__stack_logos_circle" id='react'>
                        <img src={react_logo} alt="react" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Information;