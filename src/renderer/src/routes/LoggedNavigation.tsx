import { LoggedLayout } from '@renderer/layouts/LoggedLayout/LoggedLayout'
import { Auth } from '@renderer/pages/Auth/Auth'
import { Home } from '@renderer/pages/Home/Home'
import { HashRouter, Route, Routes } from 'react-router-dom'

export const LoggedNavigation = (): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <LoggedLayout>
              <Home />
            </LoggedLayout>
          }
        />
        <Route
          path="/products"
          element={
            <LoggedLayout>
              <Home />
            </LoggedLayout>
          }
        />
        <Route path="/" element={<Auth />} />
      </Routes>
    </HashRouter>
  )
}
