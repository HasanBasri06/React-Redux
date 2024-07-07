import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../partials/Layout'
import store, { decremented, incremented } from '../store'
import useDynamicTitle from '../useDynamicTitle'
import './Home.css'


function Home() {
    useDynamicTitle("Anasayfa")
    
    const increment = () => store.dispatch(incremented())
    const decrement = () => store.dispatch(decremented())
    let value = useSelector(state => state.value)

    return (
        <Layout>
            <div id='counterSlice'>
                <button onClick={increment}>increment</button>
                    <div id='count'>{value}</div>
                <button onClick={decrement}>decrement</button>
            </div>
        </Layout>
    )
}

export default Home