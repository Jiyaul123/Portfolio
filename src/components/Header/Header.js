import React from 'react'
import { Container, Button, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import resumeData from '../../util/resumeData';
import {Link, NavLink, withRouter} from 'react-router-dom';
import {Twitter, LinkedIn, Facebook, Telegram, HomeRounded, SchoolRounded, WorkRounded} from '@material-ui/icons';
import CustomButton from '../Button/Button';
import './Header.css'

const Header = (props) => {
    const pathName = props?.location?.pathname;
    return (
        <Navbar sticky="top" className="header" expand="lg">
            {/*Home*/}
            <Nav.Link as={NavLink} to= "/">
                <Navbar.Brand className="header_home">
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className="header_left">
                    {/*For Resume */}
                    <Nav.Link as={NavLink} to="/" className={pathName === "/" ? "header_link_active" : "header_link"}> 
                        Resume
                    </Nav.Link>

                     {/*For Portfolio */}
                     <Nav.Link as={NavLink} to="/portfolio" className={pathName === "/portfolio" ? "header_link_active" : "header_link"}> 
                        Portfolio
                    </Nav.Link>
                </Nav>

                <div className= "header_right">
                    {Object.keys(resumeData.socials).map((key) => (
                         <a href = {resumeData.socials[key].Link} >{resumeData.socials[key].icon}</a>

                    ))}
                    <CustomButton text= {"Hire Me"} icon = {<Telegram />}/>
                </div>
            </Navbar.Collapse>
      </Navbar>
    )
}


export default withRouter(Header);
