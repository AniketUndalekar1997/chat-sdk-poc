import React from 'react';
import ReactDOM from 'react-dom/client';   // Use React 18 root API
import ChatSDK from './ChatSDK';

const init = ({ username, theme }) => {
    const container = document.getElementById('chat-sdk-container');

    // Ensure the container exists before rendering
    if (container) {
        const root = ReactDOM.createRoot(container);
        root.render(<ChatSDK username={username} theme={theme} />);
    }
};

// Attach to window for UMD export
if (typeof window !== 'undefined') {
    window.ChatSDK = { init };
}

export { init };
