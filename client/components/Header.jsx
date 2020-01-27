import React from 'react'

class Header extends React.Component {



    render() {
        return (
            <div>

                <div className='header' id='headerPic'>
             <div className='row top-links'> 
            <a className='top-link-buttons'>Contact Me</a>
            <a className='top-link-buttons'>Photography</a>
            <a className='top-link-buttons'>Design Work</a>
            <a className='top-link-buttons'>About Me</a>
            </div>   
            <img src='img/logo.png' id="header-logo"></img></div>
            </div>
        )
    }
}


export default Header
