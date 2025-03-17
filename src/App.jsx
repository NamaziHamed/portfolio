import React, { Component } from "react";

class App extends Component {
  state = {
    status: "nameLoad",
  };
  name = ["H", "a", "m", "e", "d", " ", "N", "a", "m", "a", "z", "i"];

  render() {
    return (
      <>
        {this.state.status === "nameLoad" && (
          <p>
            {this.name.map((char, index) => (
              <span
                key={index}
                style={{
                  animation: `fadeIn 0.3s ease ${index * 0.15}s forwards`,
                  opacity: 0, // Default to hidden
                }}
              >
                {char}
              </span>
            ))}
          </p>
        )}
      </>
    );
  }
}

export default App;
