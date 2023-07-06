import { ShoppingCart, Sun, Moon } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks/useAppSelector'
import { useDispatch } from 'react-redux'
import { handleDarkMode } from '../../store/reducers/darkMode'
import { Logo } from '../Logo'

export function Header() {
  const cart = useAppSelector((state) => state.cart)
  const { isDarkMode } = useAppSelector((state) => state.darkMode)
  const dispatch = useDispatch()

  const handleTheme = () => {
    const isDarkModeNew = !isDarkMode
    dispatch(handleDarkMode(isDarkModeNew))

    const htmlTag = document.querySelector('html')

    if (isDarkModeNew) {
      htmlTag?.classList.add('dark')
    } else {
      htmlTag?.classList.remove('dark')
    }
  }

  return (
    <header className="bg-white dark:bg-gray-950 border-b border-slate-900/10 dark:border-slate-300/10 px-3 py-7 sticky top-0">
      <div className="flex justify-between max-w-screen-xl mx-auto">
        <NavLink to="/" title="Home">
          {/* <img src="src/assets/images/coffee-logo.svg" alt="" /> */}
          <Logo />
        </NavLink>

        <div className="flex gap-3">
          <button
            onClick={handleTheme}
            className="flex items-center gap-1 p-2 rounded-md bg-purple-300 dark:bg-purple-700 text-purple-500 dark:text-purple-300"
          >
            {isDarkMode ? <Sun size={25} /> : <Moon size={25} />}
          </button>
          <NavLink to={'/checkout'}>
            <div className="flex justify-center items-center gap-1 p-2 rounded-md bg-yellow-300 dark:bg-yellow-700 text-yellow-700 dark:text-yellow-300 relative">
              {cart.length > 0 && (
                <div className="absolute top-[-7px] right-[-7px] font-bold text-white text-sm bg-yellow-700 dark:bg-yellow-500 rounded-full w-5 h-5 flex justify-center">
                  {cart.length}
                </div>
              )}
              <ShoppingCart size={25} weight="fill" />
            </div>
          </NavLink>
        </div>
      </div>
    </header>
  )
}
