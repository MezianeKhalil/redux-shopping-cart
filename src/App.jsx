import RouterConfig from './routes/routerConfig'
import { Provider } from 'react-redux'
import persist from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  const { store, persistor} = persist()
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
