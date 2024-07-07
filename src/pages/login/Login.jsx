import React, { useState } from 'react'
import LoginForm from '../../components/LoginForm'
import Layout from '../../partials/Layout'

function Login() {
  const [count, setCount] = useState(0)
  return (
    <Layout>
        <LoginForm></LoginForm>

        <button onClick={() => setCount(count + 1)}>Increment {count}</button>
    </Layout>
  )
}

export default Login