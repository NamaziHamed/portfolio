import React, { Component } from "react";

class App extends Component {
  state = {
    status: "nameLoad",
  };

  name = ["H", "a", "m", "e", "d", " ", "N", "a", "m", "a", "z", "i"];

componentDidMount = ()=>{
  setTimeout(()=>{
    this.setState({status: "nameLoaded"})
  }, ((this.name.length * 150) + 1000) )
}

  render() {
    return (
      <>
        {this.state.status === "nameLoad" && (
          <h1 style={{
            width: '100%',
            height: '98vh',
            textAlign: 'center',
            transform: 'translateY(40%)',
            fontSize: "7vw"
          }}>
            {this.name.map((char, index) => (
              <span
                key={index}
                style={{
                  animation: `fadeIn 0.3s ease ${index * 0.15}s forwards`,
                  opacity: 0,
                }}
              >
                {char}
              </span>
            ))}
          </h1>
        )}
      </>
    );
  }
}

export default App;