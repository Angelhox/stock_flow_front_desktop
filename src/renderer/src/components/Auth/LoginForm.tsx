import { useState } from 'react'
import './LoginForm.scss'
import { BiShow, BiHide } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
export const LoginForm = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const navigate = useNavigate()
  const handleShowPassword = (): void => {
    setShowPassword((value) => !value)
  }
  const handleSubmit = (data) => {
    navigate('/home')
  }
  return (
    <div
      className="LoginForm
    "
    >
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <div className="login-input-group">
          <label htmlFor="user">Usuario</label>
          <input type="text" id="user" />
          <p className="error">Error en el usuario</p>
        </div>
        <div className="login-input-group password">
          <label htmlFor="password">Contraseña</label>
          <input type={showPassword ? 'text' : 'password'} id="password" className="password" />

          {showPassword ? (
            <BiShow onClick={handleShowPassword} />
          ) : (
            <BiHide onClick={handleShowPassword} />
          )}
        </div>
        <p className="error-out">Error en la Contraseña</p>
        <p className="forgot-password">¿Olvidaste tu Contraseña?</p>
        <div className="buttons">
          <button>Iniciar Sesion</button>
        </div>
      </form>
    </div>
  )
}
