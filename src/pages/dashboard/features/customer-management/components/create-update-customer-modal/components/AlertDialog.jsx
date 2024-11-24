import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography
} from '@mui/material'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'

const CustomAlertDialog = ({ open, onClose, onConfirm, title, content }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '400px',
          padding: '16px'
        }
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          padding: '8px 8px 0 8px'
        }}
      >
        <WarningAmberIcon sx={{ color: '#ff9800' }} />
        <Typography variant="h6">{title || 'Xác nhận'}</Typography>
      </DialogTitle>
      <DialogContent sx={{ padding: '20px 8px' }}>
        <DialogContentText>{content || 'Bạn có chắc chắn muốn tiếp tục?'}</DialogContentText>
      </DialogContent>
      <DialogActions sx={{ padding: '0 8px 8px 8px' }}>
        <Button
          onClick={onClose}
          sx={{
            color: '#637381'
          }}
        >
          Hủy
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          sx={{
            bgcolor: '#F3B71B',
            '&:hover': {
              bgcolor: '#dba718'
            }
          }}
        >
          Xác nhận
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CustomAlertDialog
