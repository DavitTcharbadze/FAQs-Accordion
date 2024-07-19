import classes from './modules/App.module.scss'
import background from './assets/images/background-pattern-desktop.svg'
import Faqs from './components/Faqs';


function App() {

  return (
    <div className={classes['main-wrapper']}>
      <img className={classes['background-image']} src={background} alt="" />

      <Faqs />
    </div>
  )
}

export default App;
