import RouterConfig from './routes/routerConfig'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="font-poppins">
          <RouterConfig />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App
