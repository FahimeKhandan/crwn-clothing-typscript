import { Outlet } from 'react-router-dom'

//components
import Navigation from '../components/navigation/Navigation.component'

//styles
import './root.style.scss'

function Root() {
  return (
    <>
      <Navigation />
    <div className='body-container'>  <Outlet /></div>
    </>
  )
}

export default Root
