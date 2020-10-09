import React from 'react'
import './workflow.css'
import '../feature/feature.css'
import WorkflowI from '../images/workflow_timeline_mobile.svg'
import play from '../images/google-play-badge.svg'
import Pic from '../images/pic.png'
import road from '../images/roadmap-advanced.png'
import access from '../images/Access module image-01.svg'
import partner from "../images/Partner-Logos.png"

export default function Workflow() {
    return (
        <div>

            <div className="workflow-container">

                <div className="wr_1">
                    <div className="wr_1_text">
                        <h2>Choose a workflow, or make your own</h2>
                        <h4>Every team has a unique process for shipping software. Use an out-of-the-box workflow, or create one to match the way your team works.</h4>
                    </div>
                    <img className="workflow_pic" src={WorkflowI} alt="workflow"></img>
                </div>


            </div>
            <div className="integrate_tools">
              <h2 class="heading"> Integrate with the tools you already use </h2>
              <p>Upgrade your workflow with Confluence, Bitbucket, and hundreds of other developer tools.</p>

            </div>
            <div className="container_fluid"> 
               <div >
                  <div >
                       <div> <img src="https://wac-cdn.atlassian.com/dam/jcr:cd0479fa-ce91-412a-86e8-abcd2362d5bb/software%20jira%20documentation%20confluence.svg?cdnVersion=1286" style={{height:66}}/></div>
                    
                        <div >
                             <h4 class="heading"> Knowledge management </h4> <p>Transform product requirements in Confluence into a Jira Software backlog with one click.</p> 
                        </div> 
                        <div >
                             <a href="/software/confluence" data-event="clicked" data-uuid="890433a0-35" data-event-component="linkButton" data-event-container="linkButto" > Learn more about Confluence</a> 
                        </div>
                    </div>   
                </div>
                <div class="column column-md-6 column-lg-4">
                  <div class="component component--image-heading-textblock">
                       <div class="component__image"> <img src="https://wac-cdn.atlassian.com/dam/jcr:033e6808-6753-4ebe-a579-8aeca167c743/Software-Git.svg?cdnVersion=1289" style={{height:66}}/></div>
                    
                        <div class="component__heading-textblock">
                             <h4 class="heading"> Knowledge management </h4> <p>Transform product requirements in Confluence into a Jira Software backlog with one click.</p> 
                        </div> 
                        <div class="component component--link-button">
                             <a href="/software/confluence" data-event="clicked" data-uuid="890433a0-35" data-event-component="linkButton" data-event-container="linkButto" > Learn more about Confluence</a> 
                        </div>
                    </div>   
                </div>
                <div class="column column-md-6 column-lg-4">
                  <div class="component component--image-heading-textblock">
                       <div class="component__image"> <img src="https://wac-cdn.atlassian.com/dam/jcr:40d95e12-b2cc-4c19-a0e9-dadef3053949/Software-Hierarchy%20Window.svg?cdnVersion=1289" style={{height:66}}/></div>
                    
                        <div class="component__heading-textblock">
                             <h4 class="heading"> Knowledge management </h4> <p>Transform product requirements in Confluence into a Jira Software backlog with one click.</p> 
                        </div> 
                        <div class="component component--link-button">
                             <a href="/software/confluence" data-event="clicked" data-uuid="890433a0-35" data-event-component="linkButton" data-event-container="linkButto" > Learn more about Confluence</a> 
                        </div>
                    </div>   
                </div>
            </div>
            <hr/>
            <div className="Feature-container">

                <div className="feature-text">
                    <h1>The best software teams ship early and often.</h1>
                    <p>Jira Software is built for every member of your software team to plan,
                        track, and release great software.</p>
                </div>

            

                <div className="f2">
                    <div className="f1-des">
                        <h2>Paln</h2>
                        <p>Create user stories and issues, plan sprints, and distribute tasks across your software team.</p>
                        <h2>Track</h2>
                        <p>Create user stories and issues, plan sprints, and distribute tasks across your software team.</p>
                    </div>
                    <img src={road} className="f1-image" alt="image1"></img>
                </div>
            

             </div>
           

            <div className="automation">
                <h2>Streamline your work with automation</h2>
                <h5>Save time, stay focused and work smarter with Jira automation. </h5>
                <button>Learn more about automation</button>
            </div>


            <div className="feature-text">
                <h1>Designed for security and scale</h1>
               <p >Gain peace of mind with enterprise-grade solutions tailor-made to secure and scale Jira Software across your entire organization.</p> 

            </div>

            <div className="security_style"> 
               <div >
                  <div className="col">
                       <div> <img src={access} style={{}}/></div>
                    
                        <div >
                             <h4 class="heading"> Knowledge management </h4> <p>Transform product requirements in Confluence into a Jira Software backlog with one click.</p> 
                        </div> 
                        <div >
                             <a href="/software/confluence" data-event="clicked" data-uuid="890433a0-35" data-event-component="linkButton" data-event-container="linkButto" > Learn more about Confluence</a> 
                        </div>
                    </div>   
                </div>
                <div >
                  <div className="col" >
                       <div> <img src="https://wac-cdn.atlassian.com/dam/jcr:8ebe2a91-8722-4bb9-8b36-07b0177bdf88/Premium%20Cloud%20module%20image.svg?cdnVersion=1289" style={{}}/></div>
                    
                        <div >
                             <h4> Knowledge management </h4> <p>Transform product requirements in Confluence into a Jira Software backlog with one click.</p> 
                        </div> 
                        <div >
                             <a href="/software/confluence" data-event="clicked" data-uuid="890433a0-35" data-event-component="linkButton" data-event-container="linkButto" > Learn more about Confluence</a> 
                        </div>
                    </div>   
                </div>
                

            </div>


            <div className="App_dowload">
                <div className="app_container">
                    <i class="fas fa-bookmark"></i>
                    <h2>Move work forward from anywhere</h2>
                    <h5>Track and manage projects in real time from the convenience of your favorite device with Jira mobile.</h5>
                    <img src={play} className="play" alt="play"></img>
                </div>

                <div className="app_container" id="test-2">
                    <img src={Pic} alt="test"></img>
                    <h2>"Jira Software is instrumental in building and maintaining the best software on the market."</h2>
                    <h5>DANIELE FARNEDI, TRULIA CTO</h5>
                    <a href="#" className="story_link">View his story</a>
                </div>

                <div style={{textAlign:"center",fontWeight:"bolder"}}><h5>Trusted by over 65,000 customers worldwide</h5></div>

            </div>
            <div className="partners" >
                    <img  src={partner} alt="partners' logo"/>
             </div>

             <div>

             </div>


            
        </div>
    
    );
}