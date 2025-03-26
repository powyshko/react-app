import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import "@styles/index.css"
import App from './App.tsx'
import ThemeProvider from '@theme/ThemeProvider.tsx';

const domNode = document.getElementById('root') as HTMLElement;

const root = createRoot(domNode);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
)
