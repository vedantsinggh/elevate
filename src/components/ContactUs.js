// src/components/ContactUs.js
import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';

const ContactUs = () => {
  return (
    <Box bgcolor="#5b2c91" color="white" py={20}>
      <Container maxWidth="lg">
        <Typography variant="h2" color="white" gutterBottom textAlign="center">
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" color="white" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" color="white" gutterBottom>
              Email: contact@example.com
            </Typography>
            <Typography variant="body1" color="white" gutterBottom>
              Phone: +1234567890
            </Typography>
            <Typography variant="body1" color="white" gutterBottom>
              Address: 123 Main Street, City, Country
            </Typography>
            <Typography variant="body1" color="white" gutterBottom>
              Hours: Monday - Friday, 9:00 AM - 5:00 PM
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" color="white" gutterBottom>
              Send a Message
            </Typography>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
            <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
              Send
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
