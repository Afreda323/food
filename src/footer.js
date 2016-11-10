import React from 'react';

const Footer = () => {
  return(
    <footer className="grey darken-4 white-text text-darken-2">
      <img alt="antfreda.com logo" className="logo" src="http://antfreda.com/img/AntLogo.png"/>
      <p className="flow-text center-align">
        This site was created using React.js, Materialize, and the Google Maps and Google Places APIs
        <br />
        Developed by <a href="http://antfreda.com">Anthony Freda</a>
        <br />
        <img src="google.png" className="google" alt="powered by google"/>
        <br />
        <a className="google" href="https://www.google.com/intl/en/policies/terms/">Google’s Terms of Service</a> | <a className="google" href="https://www.google.com/policies/privacy/">Google Privacy Policy</a>
      </p>
    </footer>
  )
}

export default Footer;
