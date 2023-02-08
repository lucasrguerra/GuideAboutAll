'use strict';

import 'tailwindcss/tailwind.css';

function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <div>
      <Component {...pageProps} />
      <style>{`
        body {
          background: #111827;
        }
      `}</style>
    </div>
  );
};
export default App;