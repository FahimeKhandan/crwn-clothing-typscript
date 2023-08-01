import { Outlet } from 'react-router-dom'

//components
import Navigation from '../components/navigation/Navigation.component'

function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default Root
