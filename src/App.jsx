import RouterConfig from './routes/routerConfig'
import { Provider } from 'react-redux'
import { newStore, store } from './store/store'

function App() {
  return (
    <Provider store={newStore}>
       <div className="font-poppins">
          <RouterConfig />
        </div>
    </Provider>
  )
}

export default App
