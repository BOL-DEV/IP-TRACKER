import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { IpProvider } from './contexts/IpContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IpProvider>
      <App />
    </IpProvider>
  </StrictMode>,
);
