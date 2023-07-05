import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Provider } from 'react-redux'
import { store } from './store'

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}
