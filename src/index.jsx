import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <StrictMode>
        <Provider store={store}>
            
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </StrictMode>,
);
