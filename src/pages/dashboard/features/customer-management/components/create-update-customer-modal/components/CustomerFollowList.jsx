import ControlPointIcon from '@mui/icons-material/ControlPoint'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useStatusContext } from '../../../../../../../context/status_context'
import { CustomInput } from './../../../../../components/CustomInput'
import { CustomSelect } from './../../../../../components/CustomSelect'

const AddNewCommentDialog = ({ open, onClose, onAdd, statusOptions }) => {
  const [newComment, setNewComment] = useState({
    time: '',
    title: '',
    status_id: ''
  })

  const handleAdd = () => {
    if (newComment.time && newComment.title && newComment.status_id) {
      onClose()
      setNewComment({
        time: '',
        title: '',
        status_id: ''
      })
    }
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Thêm ghi chú mới</DialogTitle>
      <DialogContent>
        <Stack spacing={3} sx={{ mt: 2 }}>
          {/* Input date */}
          <CustomInput
            label="Ngày"
            required
            type="datetime-local"
            value={newComment.time}
            onChange={(e) => setNewComment(prev => ({
              ...prev,
              time: e.target.value
            }))}
            size="small"
            fullWidth
          />

          {/* Input title */}
          <CustomInput
            label="Nội dung ghi chú"
            required
            value={newComment.title}
            onChange={(e) => setNewComment(prev => ({
              ...prev,
              title: e.target.value
            }))}
            placeholder="Nhập nội dung ghi chú"
            size="small"
            fullWidth
          />

          {/* Select status */}
          <CustomSelect
            label="Trạng thái"
            required
            value={newComment.status_id}
            onChange={(selectedValue) => setNewComment(prev => ({
              ...prev,
              status_id: selectedValue
            }))}
            options={statusOptions}
            placeholder="Chọn trạng thái"
            size="small"
            fullWidth
          />
        </Stack>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} variant="outlined" color="inherit">
          Hủy
        </Button>
        <Button
          onClick={handleAdd}
          variant="contained"
          disabled={!newComment.time || !newComment.title || !newComment.status_id}
        >
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  )
}

// Component for the comments list
const CustomerFollowUpList = ({ initialComments = [], onCommentsUpdate }) => {
  const { statusOptions } = useStatusContext()

  // State for the comments list
  const [comments, setComments] = useState(
    initialComments.map((comment, index) => ({
      ...comment,
      id: index + 1
    }))
  )

  const [openDialog, setOpenDialog] = useState(false)

  useEffect(() => {
    onCommentsUpdate(comments)
  }, [comments, onCommentsUpdate])

  const handleUpdateComment = (id, field, value) => {
    const updatedComments = comments.map(comment =>
      comment.id === id ? { ...comment, [field]: value } : comment
    )
    setComments(updatedComments)
  }

  const handleAddNewComment = (newComment) => {
    const formattedTime = new Date(newComment.time).toISOString()

    // Add new comment with the formatted time
    setComments([...comments, { id: comments.length + 1, time: formattedTime, ...newComment }])
  }

  return (
    <>
      <TableContainer component={Paper} sx={{
        boxShadow: 'none',
        border: '1px solid #bdbdbd',
        borderBottom: 'none',
        borderRadius: '10px 10px 0 0'
      }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f2f2f2' }}>
              <TableCell width={80} sx={{ fontWeight: 400, fontSize: '14px', color: '#2d2d2d' }}>#</TableCell>
              <TableCell width={200} sx={{ fontWeight: 400, fontSize: '14px', color: '#2d2d2d' }}>Thời gian</TableCell>
              <TableCell sx={{ fontWeight: 400, fontSize: '14px', color: '#2d2d2d' }}>Nội dung</TableCell>
              <TableCell width={200} sx={{ fontWeight: 400, fontSize: '14px', color: '#2d2d2d' }}>Trạng thái</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comments.map((comment, index) => (
              <TableRow key={comment.id} sx={{
                '& td': { borderBottom: index === comments.length - 1 ? 'none' : 'block' }
              }}>
                <TableCell>{comment.id}</TableCell>
                <TableCell>
                  <CustomInput
                    type="datetime-local"
                    value={comment.time}
                    onChange={(e) => handleUpdateComment(comment.id, 'time', e.target.value)}
                    fullWidth
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <CustomInput
                    value={comment.title}
                    onChange={(e) => handleUpdateComment(comment.id, 'title', e.target.value)}
                    fullWidth
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <CustomSelect
                    value={comment.status_id}
                    onChange={(selectedValue) => handleUpdateComment(comment.id, 'status_id', selectedValue)} // Cập nhật status_id
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

      {/* Button to add a new comment */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 2,
        border: '1px dashed #828282'
      }}>
        <Button
          variant="text"
          startIcon={<ControlPointIcon sx={{ width: '28px', height: '28px' }} />}
          sx={{
            color: '#BD8306',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: 400,
            padding: '16px 24px',
            '&:hover': { fontWeight: 'bold', transform: 'scale(1.05)', transition: 'all 0.3s ease' }
          }}
          onClick={() => setOpenDialog(true)}
        >
          Thêm
        </Button>
      </Box>

      {/* Add new comment dialog */}
      <AddNewCommentDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onAdd={handleAddNewComment}
        statusOptions={statusOptions}
      />
    </>
  )
}

export default CustomerFollowUpList
