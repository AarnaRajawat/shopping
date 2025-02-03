
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import "slick-carousel/slick/slick.css"; // Carousel styles
import "slick-carousel/slick/slick-theme.css"; // Carousel theme styles

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

