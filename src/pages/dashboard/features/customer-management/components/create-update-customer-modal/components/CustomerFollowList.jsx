import React, { useState } from 'react'
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack
} from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { CustomInput } from './../../../../../components/CustomInput'
import { CustomSelect } from './../../../../../components/CustomSelect'
import calendarIcon from './../../../../../../../assets/calendar.png'
import ControlPointIcon from '@mui/icons-material/ControlPoint'

const AddNewEntryDialog = ({ open, onClose, onAdd }) => {
  const [newEntry, setNewEntry] = useState({
    date: '',
    result: '',
    status: ''
  })

  const statusOptions = [
    { value: 'Gọi lại lần sau', label: 'Gọi lại lần sau' },
    { value: 'Yêu cầu trải nghiệm', label: 'Yêu cầu trải nghiệm' }
  ]

  const handleAdd = () => {
    if (newEntry.date && newEntry.result && newEntry.status) {
      onAdd(newEntry)
      setNewEntry({
        date: '',
        result: '',
        status: ''
      })
      onClose()
    }
  }

  const handleClose = () => {
    setNewEntry({
      date: '',
      result: '',
      status: ''
    })
    onClose()
  }

  const handleStatusChange = (selected) => {
    setNewEntry({ ...newEntry, status: selected.value })
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>Thêm kết quả chăm sóc mới</DialogTitle>
      <DialogContent>
        <Stack spacing={3} sx={{ mt: 2 }}>
          <CustomInput
            label="Ngày"
            required
            type="date"
            value={newEntry.date}
            onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
            size="small"
            icon={calendarIcon}
            fullWidth
          />

          <CustomInput
            label="Kết quả chăm sóc"
            required
            value={newEntry.result}
            onChange={(e) => setNewEntry({ ...newEntry, result: e.target.value })}
            placeholder="Nhập kết quả chăm sóc"
            size="small"
            fullWidth
          />

          <CustomSelect
            label="Trạng thái"
            required
            value={newEntry.status}
            onChange={handleStatusChange}
            options={statusOptions}
            placeholder="Chọn trạng thái"
            size="small"
            fullWidth
          />
        </Stack>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button
          onClick={handleClose}
          variant="outlined"
          color="inherit"
        >
          Hủy
        </Button>
        <Button
          onClick={handleAdd}
          variant="contained"
          disabled={!newEntry.date || !newEntry.result || !newEntry.status}
        >
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const CustomerFollowUpList = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: '2022-04-28',
      result: 'Khách hàng hẹn gọi lại sau',
      status: 'Gọi lại lần sau'
    },
    {
      id: 2,
      date: '2022-04-30',
      result: 'Khách yêu cầu trải nghiệm',
      status: 'Yêu cầu trải nghiệm'
    }
  ])

  const [openDialog, setOpenDialog] = useState(false)

  const statusOptions = [
    { value: 'Gọi lại lần sau', label: 'Gọi lại lần sau' },
    { value: 'Yêu cầu trải nghiệm', label: 'Yêu cầu trải nghiệm' }
  ]

  const handleUpdateEntry = (id, field, value) => {
    setEntries(entries.map(entry =>
      entry.id === id ? { ...entry, [field]: value } : entry
    ))
  }

  const handleStatusUpdate = (id, selected) => {
    handleUpdateEntry(id, 'status', selected.value)
  }

  const handleAddNewEntry = (newEntry) => {
    setEntries([
      ...entries,
      {
        id: entries.length + 1,
        ...newEntry
      }
    ])
  }

  return (
    <>
      <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid #bdbdbd', borderBottom: 'none', borderRadius: '10px 10px 0 0'}}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f2f2f2' }}>
              <TableCell width={80} sx={{ fontWeight: 400, fontSize: '14px', color: '#2d2d2d' }}>Lần</TableCell>
              <TableCell width={200} sx={{ fontWeight: 400, fontSize: '14px', color: '#2d2d2d' }}>Ngày</TableCell>
              <TableCell sx={{ fontWeight: 400, fontSize: '14px', color: '#2d2d2d' }}>Kết quả chăm sóc</TableCell>
              <TableCell width={200} sx={{ fontWeight: 400, fontSize: '14px', color: '#2d2d2d' }}>Cập nhật trạng thái</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry, index) => (
              <TableRow
                key={entry.id}
                sx={{
                  '& td': {
                    borderBottom: index === entries.length - 1 ? 'none' : 'block'
                  }
                }}
              >
                <TableCell>{entry.id}</TableCell>
                <TableCell>
                  <CustomInput
                    type="date"
                    value={entry.date}
                    onChange={(e) => handleUpdateEntry(entry.id, 'date', e.target.value)}
                    fullWidth
                    size="small"
                    icon={calendarIcon}
                  />
                </TableCell>
                <TableCell>
                  <CustomInput
                    value={entry.result}
                    onChange={(e) => handleUpdateEntry(entry.id, 'result', e.target.value)}
                    fullWidth
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <CustomSelect
                    value={entry.status}
                    onChange={(selected) => handleStatusUpdate(entry.id, selected)}
                    options={statusOptions}
                    fullWidth
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, border: '1px dashed #828282' }}>
        <Button
          variant="text"
          startIcon={<ControlPointIcon sx={{ width: '28px', height: '28px' }} />}
          sx={{
            color: '#BD8306',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: 400,
            padding: '16px 24px',
            '&:hover': {
              fontWeight: 'bold',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease'
            }
          }}
          onClick={() => setOpenDialog(true)}
        >
    Thêm
        </Button>
      </Box>


      <AddNewEntryDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onAdd={handleAddNewEntry}
      />
    </>
  )
}

export default CustomerFollowUpList