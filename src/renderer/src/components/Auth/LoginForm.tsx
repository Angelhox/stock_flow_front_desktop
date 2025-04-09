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
    <>
      <div className="app-name">
        <h2>stockFlow</h2>
        <p>Control de Inventario</p>
      </div>
      <div
        className="LoginForm
        "
      >
        <form onSubmit={handleSubmit}>
          <h1>Inicio de sesion</h1>
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
            <p className="error-out">Error en la Contraseña</p>
          </div>
          <p className="forgot-password">¿Olvidaste tu Contraseña?</p>
          <div className="buttons">
            <button>Iniciar Sesion</button>
          </div>
        </form>
      </div>
    </>
  )
}
