import React, { useState } from 'react'
import { Box, Typography, TextField, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import ChatIcon from '@mui/icons-material/Chat'
import CloseIcon from '@mui/icons-material/Close'

const ContactMeChat: React.FC = () => {
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState<string[]>([])
  const [showChat, setShowChat] = useState(false)

  const sendMessage = () => {
    if (message.trim() !== '') {
      setChatHistory([...chatHistory, message])
      setMessage('')
    }
  }

  const toggleChat = () => {
    setShowChat(!showChat)
  }

  const closeChat = () => {
    setShowChat(false)
  }

  return (
    <>
      {showChat && (
        <Box
          position="fixed"
          bottom="20px"
          right="20px"
          width="300px"
          borderRadius="8px"
          boxShadow={3}
          bgcolor="#fff"
          zIndex={1000}
        >
          <Box
            padding="16px"
            borderBottom="1px solid #ddd"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h6">Contact Me</Typography>
            <IconButton onClick={closeChat} color="primary">
              <CloseIcon />
            </IconButton>
          </Box>
          <Box padding="16px" maxHeight="300px" overflow="auto">
            {chatHistory.map((msg, index) => (
              <Typography key={index} variant="body1" gutterBottom>
                {msg}
              </Typography>
            ))}
          </Box>
          <Box padding="16px" borderTop="1px solid #ddd">
            <TextField
              placeholder="Type a message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              fullWidth
              variant="outlined"
              size="small"
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  sendMessage()
                }
              }}
            />
          </Box>
        </Box>
      )}

      <IconButton
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          backgroundColor: showChat ? 'transparent' : '#3f51b5',
          borderRadius: '50%',
          width: showChat ? 'auto' : '50px',
          height: showChat ? 'auto' : '50px',
          transition: 'all 0.3s ease',
        }}
        onClick={showChat ? undefined : toggleChat}
        color={showChat ? 'primary' : 'inherit'}
      >
        {!showChat && <ChatIcon fontSize="large" />}
      </IconButton>
    </>
  )
}

export default ContactMeChat
