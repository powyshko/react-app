import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import "@app/styles/index.css"
import App from '@app/App';
import { ThemeProvider } from '@app/providers/ThemeProvider';

const domNode = document.getElementById('root') as HTMLElement;

const root = createRoot(domNode);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
)
