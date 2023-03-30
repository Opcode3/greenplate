import React from 'react'

const RegisterPage = (): JSX.Element => {
  const [firstName, setFirstName] = React.useState<string | undefined>(undefined)
  const [lastName, setLastName] = React.useState<string | undefined>(undefined)
  const [email, setEmail] = React.useState<string | undefined>(undefined)

  const loginFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Working well!')
  }
  return (
    <div className="">User account!</div>
  )
}

export default RegisterPage