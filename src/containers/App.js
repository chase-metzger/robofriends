import React, { useReducer } from 'react'

import MainPage from '../components/MainPage'
import RobotsContext from '../context'
import Constants from '../constants'
import { apiCall } from '../api/api'

export default function App (props) {
  const [ state, dispatch ] = useReducer((state, action) => {
    switch (action.type) {
      case Constants.REQUEST_ROBOTS_STATE_PENDING:
        return {
          ...state,
          isPending: true
        }
      case Constants.REQUEST_ROBOTS_STATE_SUCCESS:
        return {
          ...state,
          robots: action.payload,
          isPending: false
        }
      case Constants.REQUEST_ROBOTS_STATE_FAILED:
        return {
          ...state,
          error: action.payload,
          isPending: false
        }
      default:
        return state
    }
  }, {
    isPending: false,
    robots: [],
    error: null
  })

  function requestRobots () {
    dispatch({ type: Constants.REQUEST_ROBOTS_STATE_PENDING })
    apiCall(Constants.JSON_PLACEHOLDER_URL)
      .then(data => dispatch({ type: Constants.REQUEST_ROBOTS_STATE_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: Constants.REQUEST_ROBOTS_STATE_FAILED, payload: error }))
  }

  return (
    <RobotsContext.Provider value={{ state, dispatch, requestRobots }}>
      <MainPage />
    </RobotsContext.Provider>
  )
};
