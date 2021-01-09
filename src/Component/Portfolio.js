import React, {Component} from 'react';

class Portfolio extends Component {
    render() {
        if (this.props.data) {
            var projects = this.props.data.projects.map(function (projects) {
                var portfolioImage = require('./portfolio/' + projects.image).default;
                return (
                    <div key={
                            projects.title
                        }
                        className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href={
                                    projects.url
                                }
                                title={
                                    projects.title
                            }>
                                <img alt={
                                        projects.title
                                    }
                                    src={portfolioImage}/>
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5 style={{color : "magenta"}}>{
                                            projects.title
                                        }</h5>
                                        <p style={{color : "magenta"}}>{
                                            projects.category
                                        }</p>
                                    </div>
                                </div>
                                <div className="link-icon">
                                    <i style={{color : "green"}} className="fa fa-link"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                )
            })
        }
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                         <h1>Check Out Some of My Works.</h1>
                         <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                             {projects}
                         </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Portfolio;
