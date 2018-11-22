import React, { Component } from 'react';
import { inject, observer} from  'mobx-react';


@inject('BirdStore')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
