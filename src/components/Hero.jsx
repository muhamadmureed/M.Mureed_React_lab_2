import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function Hero() {
  const headline = "Build Faster Modern Web Apps with React"
  const subtext = "DevLaunch gives developers the tools and reusable components needed to launch production-grade applications in minutes."

  return (
    <Box id="home" sx={{ bgcolor: '#f0f4f8', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Chip
          label="v2.0 Just Released"
          color="primary"
          variant="outlined"
          size="small"
          sx={{ mb: 3 }}
        />

        <Typography
          variant="h3"
          component="h1"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: '2rem', md: '3.25rem' } }}
        >
          {headline}
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4, fontWeight: 400, maxWidth: 650, mx: 'auto' }}
        >
          {subtext}
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            size="large"
            color="primary"
            endIcon={<ArrowForwardIcon />}
          >
            Start Free Trial
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="primary"
          >
            Documentation
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
