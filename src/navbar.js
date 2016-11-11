import React from 'react';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  //Handle Info Click
  handleClick(){
    //Slide the info in
    if(document.querySelector('.home').classList.contains('hidden') || document.querySelector('.home').classList.contains('slide-out')){
      document.querySelector('.home').className = "red home z-depth-3 slide-in";
      this.setState({open: true});
    }else{
      //Slide the info out
      document.querySelector('.home').className = "red home z-depth-3 slide-out";
      this.setState({open: false});
    }
  }
  render(){
 //Render Icon Accordingly
  let icon;
  if (this.state.open === false) {
    icon = <i className="medium material-icons">info_outline</i>;
  }else{
    icon = <i className="medium material-icons">close</i>
  }
    return(
      <nav className="z-depth-5">
      <div className="nav-wrapper red darken-1">
        <a href="index.html" className="brand-logo center white red-text"><i className="material-icons">restaurant_menu</i></a>
        <a  className="right darken-1 about" onClick={this.handleClick}>
          {icon}
        </a>
      </div>
    </nav>
    )
  }
}

export default Nav;
