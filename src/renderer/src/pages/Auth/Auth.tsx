import { logo_nh_negative } from '@renderer/assets'
import './Auth.scss'
import { useState } from 'react'
import { LoginForm } from '@renderer/components/Auth/LoginForm'
export const Auth = (): JSX.Element => {
  const [typeForm, setTypeForm] = useState<string>('')
  const openLogin = (): void => {
    setTypeForm('Login')
  }

  return (
    <div className="Auth">
      <div className="logo-area"></div>
      <div className="login-area"></div>
      <div className="general-container">
        <div className="logo-container">
          <img src={logo_nh_negative} alt="no_image" />
          <h1>Control de Inventario</h1>
        </div>
        <div className="login-container">
          <h2>stockFlow</h2>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
