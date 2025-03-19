import React, { useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const App = () => {
  useEffect(() => {
    // Load the Chat SDK script dynamically
    const script = document.createElement('script');
    script.src = 'http://localhost:8000/dist/chat-sdk.min.js';  // Minified SDK file in public folder
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.ChatSDK) {
        window.ChatSDK.init({ username: 'Aniket', theme: 'dark' });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        React App with MUI & Chat SDK (UMD Loaded)
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <Button variant="contained" color="primary">Click Me</Button>
        <div id="chat-sdk-container"></div>
      </Box>
    </Container>
  );
};

export default App;
