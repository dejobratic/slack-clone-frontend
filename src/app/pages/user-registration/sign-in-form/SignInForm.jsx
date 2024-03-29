import React, { useState } from "react"
import { useDispatch } from "react-redux"

import Form from "app/components/form/Form"
import TextInput from "app/components/text-input/TextInput"
import Button from "app/components/button/Button"

import { signIn } from "redux/user-login/actions"

const SignInForm = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signIn({ email, password }))
  }

  return (
    <Form
      onSubmit={handleSubmit}
      header={
        <>
          <h2>I do already have an account</h2>
          <span>Sign in with your email and password</span>
        </>
      }
      content={
        <>
          <TextInput
            required
            type="email"
            value={email}
            label="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            required
            type="password"
            value={password}
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </>
      }
      actions={
        <>
          <Button type="submit" variant="primary">
            Sign In
          </Button>
        </>
      }
    />
  )
}

export default SignInForm
