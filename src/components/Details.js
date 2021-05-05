import React from 'react';

class Details extends React.Component{
  constructor(props){
    super(props)
    
  }
  
  
   componentDidMount(){
    // Initializing listener for 'keydown' event after the component has been rendered
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount(){
    // Tearing down the listener 
    document.removeEventListener("keydown", this.handleKeyDown, false)
  }
  
  handleKeyDown=(e)=>{
    // console.log(e.keyCode)
     if(e.keyCode === this.props.keyValue){
      this.playSound()
  }
  }
  
  
  
  playSound = () =>{
    // console.log(e.keyCode)
    const sound= document.getElementById(this.props.letter)
    sound.play()
    const findLetter= sound.innerHTML
    console.log(sound,findLetter)
    
    this.props.display(findLetter)
    
  }
  
  render(){
    console.log(this.props.display)
    return(
      <div className='drum-pad' onClick={this.playSound}  onKeyDown={this.handleKeyDown}   tabIndex="0" id={`drum-${this.props.letter}`}>{this.props.letter}
        <audio  src={this.props.url}  className='clip'  id={this.props.letter}>{this.props.letter}</audio>
      </div>
        
    )
  }
  
  
}
      
      
       


export default Details;