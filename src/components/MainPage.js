import React, { useContext, useEffect, useState } from 'react'

//import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import Header from '../components/Header'

import RobotsContext from '../context'

import './MainPage.css'

const CardList = React.lazy(() => import('../components/CardList'));

export default function MainPage (props) {
  const [searchText, setSearchText] = useState('')
  const { state, requestRobots } = useContext(RobotsContext)

  useEffect(() => {
    requestRobots()
  }, [])

  function filterRobots () {
    return state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchText.toLowerCase())
    })
  }

  function onSearchChange (event) {
    setSearchText(event.target.value)
  }

  const { isPending } = state
  if (isPending) {
    return <h1 className="tc">Loading...</h1>
  } else {
    return (
      <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filterRobots()}/>
            </ErrorBoundary>
          </Scroll>
      </div>
    )
  }
};
