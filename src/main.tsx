import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { makeStore } from './store/store.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <Provider store={makeStore()}>
      <App/>
    </Provider>
);
