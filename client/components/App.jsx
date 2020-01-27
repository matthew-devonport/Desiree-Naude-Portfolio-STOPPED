import React from 'react'
import Header from './Header'
import AboutMe from './AboutMe'
import DesignWork from './DesignWork'

import { getFruits } from '../apiClient'

class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount() {
    getFruits()
      .then(fruits => {
        this.setState({ fruits })
      })
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <AboutMe />
        <DesignWork />
      </React.Fragment>
    )
  }
}

export default App
