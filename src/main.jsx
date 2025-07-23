import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: "https://ee3f643a337e9b88a61fca565eba2ce1@o4509625996214272.ingest.us.sentry.io/4509625999884288",
  integrations: [
    ({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <Sentry.ErrorBoundary fallback={<p>Something went wrong</p>}>
      <App />
    </Sentry.ErrorBoundary>
  </StrictMode>
);
