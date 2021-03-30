import React, { useState } from "react"

import Form from "app/components/form/Form"
import TextInput from "app/components/text-input/TextInput"
import Button from "app/components/button/Button"

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmedPassword, setConfirmedPassword] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmedPassword) {
      alert("Passwords do not match.")
    }

    // dispatch(signUpUser({ firstName, lastName, email, password }))
  }

  return (
    <Form
      onSubmit={handleSubmit}
      header={
        <>
          <h2>I do not have an account</h2>
          <span>Sign up with your email and password</span>
        </>
      }
      content={
        <>
          <TextInput
            required
            type={firstName}
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextInput
            required
            type={lastName}
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
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
          <TextInput
            required
            type="password"
            value={confirmedPassword}
            label="Confirmed Password"
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />
        </>
      }
      actions={
        <>
          <Button type="submit" variant="primary">
            Sign Up
          </Button>
        </>
      }
    />
  )
}

export default SignUpForm
