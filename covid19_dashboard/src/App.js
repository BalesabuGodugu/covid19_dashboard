import React from 'react'
import { Cards, Charts, Countrypicker } from './components/index'
import styles from './App.module.css'
import { fetchData } from './api'
import './App.css'

class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData()
    console.log(data)
  }
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <Countrypicker />
        <Charts />
      </div>
    )
  }
}

export default App
