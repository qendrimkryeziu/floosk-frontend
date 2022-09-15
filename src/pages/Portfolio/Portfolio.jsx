import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from '../../components/User/Navbar/Navbar'
import PageIntro from '../../components/User/PageIntro/PageIntro'
import Education from '../../components/User/Education'
import Projects from "../../components/User/Projects";
import isLogin from "../../lib/authorization"

const Portfolio = () => {
    const [isLogged, setIsLogged] = useState(isLogin)
    const login = useSelector((state) => state.auth.isLogin)
    // console.log(login)
    const homeSection = useRef(null);
    const educationSection = useRef(null);
    const projectSection = useRef(null);

    useEffect(() => {
        setIsLogged(login)
    }, [login])

    const scrollUtil = (section) => {
        window.scrollTo({
            top: section.current.offsetTop,
            behavior: "smooth",
        })
    }

    const onLinkClick = (section) => {
        switch(section) {
            case "projectSection":
                scrollUtil(projectSection)
                break;
            case "educationSection":
                scrollUtil(educationSection)
                break;
            case "homeSection":
                scrollUtil(homeSection)
                break;
            default:
                scrollUtil(homeSection);
        }
    }
  return (
    <div>
        {/* {!isLogged && <Navbar onLinkClick={onLinkClick}/>} */}
        <Navbar onLinkClick={onLinkClick}/>
        <PageIntro reff={homeSection} />
        <Education reff={educationSection} />
        <Projects reff={projectSection} />
    </div>
  )
}

export default Portfolio