import {light, dark} from '../styles/DarkMode.module.css'

const DarkModeToggle = () => {
  // TODO: Implement dark mode toggle logic

  return (
    <>
    <button className={mode ? light: dark} onClick={toggleMode}> {/* TODO: Update this text from Dark to Light dynamically */
      mode ? 'light' : 'dark'} toogle
      </button>
    </>
  )
}

export default DarkModeToggle
