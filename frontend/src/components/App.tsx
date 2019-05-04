import React from 'react';

type MyProps = {};
type MyState = {};


class App extends  React.Component <MyProps, MyState> {

  constructor(props : any){
    super(props);
    this.state = {};
  }

  render () {
    return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
  }
}

export default App;
