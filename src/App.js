import React, { Component} from 'react';
import $ from 'jquery';
import 'font-awesome/css/font-awesome.min.css';
import Header from './Component/Header';
import About from './Component/About';
import Resume  from './Component/Resume';
import Portfolio  from './Component/Portfolio';
import Testimonial from './Component/Testimonial';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      resumeData : {}
    };
    console.log("constructor call");
  }
  getResumeData()
  {
    $.ajax({
      url : '/resumeData.json',
      dataType : 'json',
      cache : false,
      success : function(data){
        this.setState({
          resumeData : data
        })
      }.bind(this),
      error : function(xhr , status , err)
      {
        console.log(err);
        alert(err);
      }
    })
  }

  componentDidMount(){
    this.getResumeData();
    console.log("in componentDidMount");
  }

  render() {
    console.log("in render");
    return (
      <div>
      <Header data={this.state.resumeData.main}/>
      <About data={this.state.resumeData.main}/>
      <Resume data = {this.state.resumeData.resume}/>
      <Portfolio data = {this.state.resumeData.portfolio}/>
      <Testimonial data={this.state.resumeData.testimonials}/>
      <Contact data={this.state.resumeData.main}/>
      <Footer data = {this.state.resumeData.main}/>
      </div>
    )
  }

}
export default App;