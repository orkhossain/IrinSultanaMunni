'use client'
import React from 'react'
import Home from './index'
import 'animate.css/animate.compat.css'
import store from '../../store'
import { Provider } from 'react-redux'

function App() {
    return (
        <>
            <Provider store={store}>
                <Home />
            </Provider>
        </>
    )
}

export default App
