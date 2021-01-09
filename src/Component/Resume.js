import React from 'react';

class Resume extends React.Component {
    render() {
        if (this.props.data) {
            var skillmessage = this.props.data.skillmessage;
            var education = this.props.data.education.map(function (education) {
                return <div key={
                    education.Collage
                }>
                    <h3> {
                        
                        education.degree
                    } </h3>
                    <div className="info">
                    <p className="info">
                        {
                            education.Collage
                    }
                        <span>
                            &bull;
                        </span>
                        <em className="date">
                            {
                            education.graduate
                        }</em>
                    </p>
                    <p className="date">{
                        education.description
                    }</p>
                    </div>

                </div>
            })
            // var work = this.props.data.work.map(function(work){
            //     return <div key={work.company}><h3>{work.company}</h3>
            //         <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            //         <p>{work.description}</p>
            //     </div>
            // })
            var skills = this.props.data.skills.map(function (skills) {
                var className = 'bar-expand ' + skills.name.toLowerCase();
                return <li key={
                    skills.name
                }>
                    <span style={{width: skills.level}} className={className}>
                    <em style={{marginLeft : "10vw"}}>{
                        skills.name
                    }</em>
                    </span>

                </li>
            })
        }
        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education} </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row work">

<div className="three columns header-col">
   <h1><span>Work</span></h1>
</div>

<div className="nine columns main-col">
 {work}
</div>
</div> */}
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>
                    <div className="nine columns main-col">
                        <p className="info">{skillmessage}</p>
                        <div className="bars">
                            <ul className="skills">
                                {skills} </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
export default Resume;
