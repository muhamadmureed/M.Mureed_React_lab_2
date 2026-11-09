import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

export default function Navbar() {
  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <RocketLaunchIcon color="primary" />
            <Typography variant="h6" fontWeight="bold" color="text.primary">
              DevLaunch
            </Typography>
          </Stack>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Button color="inherit" href="#home">Home</Button>
            <Button color="inherit" href="#features">Features</Button>
            <Button color="inherit" href="#pricing">Pricing</Button>
            <Button color="inherit" href="#about">About</Button>
          </Box>

          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
