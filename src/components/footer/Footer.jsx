import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className='row'>
        <div className="col-4">
        <i class="fa-brands fa-bootstrap"></i> <span>Bootstrap</span>
        <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
        <p>Code licensed MIT, docs CC BY 3.0.</p>
        <p>Currently v5.3.0-alpha3.</p>
        </div>
        <div className="col">
            <ul>
                <li> <h3>Link</h3> </li>
                <li> <a href="">Home</a> </li>
                <li> <a href=''>Docs</a></li>
                <li> <a href=''>Examples</a></li>
                <li> <a href=''>Icons</a></li>
                <li> <a href=''>Themes</a></li>
                <li> <a href=''>Blogs</a></li>
                <li> <a href=''>Swag Store</a></li>
            </ul>
        </div>
        <div className="col">
            <ul>
            <li> <h3>Guides</h3> </li>
                <li> <a href="">Getting started</a> </li>
                <li> <a href=''>Starter template</a></li>
                <li> <a href=''>Webpack</a></li>
                <li> <a href=''>Parcel</a></li>
                <li> <a href=''>Vite</a></li>
            </ul>
        </div>
        <div className="col">
            <ul>
            <li> <h3>Projects</h3> </li>
                <li> <a href="">Bootstrap 5</a> </li>
                <li> <a href=''>Bootstrap 4</a></li>
                <li> <a href=''>Icons</a></li>
                <li> <a href=''>RFS</a></li>
                <li> <a href=''>Examples Repo</a></li>
            </ul>
        </div>
        <div className="col">
            <ul>
            <li> <h3>Community</h3> </li>
                <li> <a href="">Issues</a> </li>
                <li> <a href=''>Discussions</a></li>
                <li> <a href=''>Corporate Sponsors</a></li>
                <li> <a href=''>Open Collective</a></li>
                <li> <a href=''>Stack Overflow</a></li>
            </ul>
        </div>

    </div>
  )
}

export default Footer