import React, {Component} from "react";

import Routes from "./components/routes";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import "./theme.css";

library.add(faStroopwafel,faTimes,faPencilAlt)

class App extends Component {
  render() {
    return (            
        <Routes></Routes>
    );

  }
}
export default App;
