import React from 'react'
import './footer.css'
import Logo1 from '../images/logo1.png'


export default function Footer(){
    return(
        <div className="footer">
            <div className="img2" alt="footerlogo">
            <img src={Logo1}></img>
            </div>
            <ul>
                <li><a href="/">Product</a></li>
                <li><a href="/">Jira Software</a></li>
                <li><a href="/">Jira Service Desk</a></li>
                <li><a href="/">Confluence</a></li>
                <li><a href="/">Trello</a></li>
                <li><a href="/">Product</a></li>
                <li><a href="/">Bitbucket</a></li>
                <li><a href="/">View all products</a></li>
            </ul>
            <ul>
                <li><a href="/">RESOURCES</a></li>
                <li><a href="/">Technical Support</a></li>
                <li><a href="/">Atlassian Community</a></li>
                <li><a href="/">Knowledge base</a></li>
                <li><a href="/">My Account</a></li>
                <li><a href="/">Knowledge base</a></li>
                <li><a href="/">Product</a></li>
                <li><a href="/">Create support ticket</a></li>
            </ul>
            <ul>
                <li><a href="/">EXPAND & LEARN</a></li>
                <li><a href="/">Partners</a></li>
                <li><a href="/">Training & Certification</a></li>
                <li><a href="/">Documentation</a></li>
                <li><a href="/">Product</a></li>
                <li><a href="/">Purchasing</a></li>
                <li><a href="/">Documentation</a></li>
                <li><a href="/">all rcources</a></li>
            </ul>
            <ul>
                <li><a href="/">ABOUT </a></li>
                <li><a href="/">Company</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Blogs</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Trust</a></li>
                <li><a href="/" >Contact us</a></li>
            </ul>
           <div>
           <footer>
	            <p>Copyright &copy; 2020 Atlassian</p>
                
           </footer>
           </div>
        </div>
        
    );
}