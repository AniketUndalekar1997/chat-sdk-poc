import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

const ChatSDK = ({ username = 'User', theme = 'light' }) => {
    const bgColor = theme === 'dark' ? '#333' : '#f5f5f5';
    const textColor = theme === 'dark' ? '#fff' : '#000';

    return (
        <Box
            sx={{
                width: 300,
                height: 400,
                backgroundColor: bgColor,
                color: textColor,
                display: 'flex',
                flexDirection: 'column',
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
            }}
        >
            <Typography variant="h6">Chat with {username}</Typography>
            <Box flex={1} my={2}>
                <TextField
                    fullWidth
                    placeholder="Type a message..."
                    variant="outlined"
                />
            </Box>
            <Button variant="contained" color="primary">Send</Button>
        </Box>
    );
};

export default ChatSDK;
