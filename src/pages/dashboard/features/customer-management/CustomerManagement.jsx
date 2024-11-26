import { Box, Button, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import iconCustomer from './../../../../assets/icon-KH.png'
import Filter from './components/Filter'
import Profile from './components/Profile'
import ResultTable from './components/result-table/ResultTable'
import { useState } from 'react'
import CustomerModal from './components/create-update-customer-modal/CreateUpdateCustomer'

export default function CustomerManagement() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Container disableGutters maxWidth={false} sx={{ backgroundColor: '#f9f9f9' }}>
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '56px',
          paddingX: '28px'
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' }
          }}
        >
          <Grid size = {{ xs: 12, sm: 6 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ display: 'flex', gap: '6px', alignItems: 'center', paddingY: '8px' }}>
              <Box
                component="img"
                sx={{
                  height: 'auto',
                  width: 36
                }}
                alt="customer-logo"
                src={iconCustomer}
              />
              <Typography sx={{ fontSize: '28px', fontWeight: 600 }}>
                Quản lý khách hàng
              </Typography>
            </Box>

            <Filter />
          </Grid>

          <Grid size = {{ xs: 12, sm: 6 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: { xs: 'flex-start', sm: 'flex-end' }
            }}
          >
            <Profile />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#BD8306',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '8px',
                textTransform: 'unset',
                padding: '8px 20px'
              }}
              onClick={handleOpen}
            >
              Thêm khách hàng
            </Button>
            <CustomerModal
              open={open}
              onClose={handleClose}
            />
          </Grid>
        </Grid>
        <ResultTable />
      </Grid>
    </Container>
  )
}
