import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Toaster } from 'react-hot-toast'

export function DefaultLayout() {
  return (
    <div className="max-w-screen-xl min-h-screen mx-auto px-3 lg:px-6">
      <Header />
      <Outlet />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}
