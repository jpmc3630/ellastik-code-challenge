import './App.css'
import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {

  return (
    <>
      <h1>Elastik Code Challenge</h1>
    </>
  )
}

const AppWithAuthenticator = withAuthenticator(App);
export default AppWithAuthenticator;
