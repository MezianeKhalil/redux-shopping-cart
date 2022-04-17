import RouterConfig from './routes/routerConfig'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
       <div className="font-poppins">
          <RouterConfig />
        </div>
    </Provider>
  )
}

export default App
