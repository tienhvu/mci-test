import AddIcon from '@mui/icons-material/Add'
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Popper,
  styled,
  TextField
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useState } from 'react'
import { Checkbox } from '@mui/material'
const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: 4,
  maxHeight: '200px',
  overflow: 'auto',
  border: '1px solid #E8EAED',
  borderRadius: 8,
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#FFFFFF'
}))

const StyledListItem = styled(ListItem)(({ theme, selected }) => ({
  cursor: 'pointer',
  backgroundColor: selected ? '#2A81D057' : 'transparent',
  padding: '8px 16px',
  borderRadius: '5px',
  height: '40px',
  '&:hover': {
    backgroundColor: '#F1F3F4'
  }
}))

const StyledListItemText = styled(ListItemText)({
  '& .MuiTypography-root': {
    fontSize: '12px',
    color: '#000000',
    fontWeight: 400
  }
})

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    height: '32px',
    fontSize: '12px',
    fontWeight: 400,
    color: '#dbdbdb',
    backgroundColor: '#ffffff'
  },
  '& .MuiOutlinedInput-input': {
    padding: '8px 12px',
    fontSize: '12px'
  },
  '& .MuiInputBase-input::placeholder': {
    fontSize: '12px',
    color: '#b3b3b3'
  }
})

const AddButton = styled(Button)({
  textTransform: 'none',
  color: '#000000',
  fontSize: '12px',
  padding: '8px 16px',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: '#F1F3F4'
  },
  '& .MuiButton-startIcon': {
    marginRight: 1
  }
})

const AddContainer = styled(Box)({
  padding: '8px 12px',
  borderTop: '1px solid #E8EAED'

})


const CustomDropdown = ({
  open,
  anchorEl,
  options = [],
  selectedValue,
  onSelect,
  onAddNew,
  onClose,
  multiple = false
}) => {
  const [newValue, setNewValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const isSelected = (value) => {
    if (multiple) {
      return Array.isArray(selectedValue) && selectedValue.includes(value)
    }
    return selectedValue === value
  }

  const handleSelect = (value) => {
    if (multiple) {
      // Xử lý logic chọn nhiều giá trị
      const currentValues = Array.isArray(selectedValue) ? selectedValue : []
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value]

      onSelect(newValues)

      if (!multiple) {
        onClose()
      }
    } else {
      onSelect(value)
      onClose()
    }
  }

  const handleAddNew = async () => {
    if (!newValue.trim()) return

    try {
      setIsLoading(true)
      if (onAddNew) {
        await onAddNew(newValue.trim())
      }
      setNewValue('')
    } catch (error) {
      console.error('Error adding new item:', error)
    } finally {
      setIsLoading(false)
      onClose()
    }
  }

  if (!anchorEl) return null

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement="bottom-start"
      style={{ width: anchorEl.offsetWidth, zIndex: 1300 }}
    >
      <StyledPaper elevation={0}>
        <List disablePadding>
          {options.map((option) => (
            <StyledListItem
              key={option.value}
              onClick={() => handleSelect(option.value)}
              selected={multiple
                ? (Array.isArray(selectedValue) && selectedValue.includes(option.value))
                : (option.value === selectedValue)
              }
              disablePadding
            >
              {multiple && (
                <Checkbox
                  checked={Array.isArray(selectedValue) && selectedValue.includes(option.value)}
                  onChange={() => handleSelect(option.value)}
                />
              )}
              <StyledListItemText primary={option.label} />
            </StyledListItem>
          ))}
          {onAddNew && (
            <AddContainer width={'100%'}>
              <Grid container width={'100%'} spacing={1} size={{ xs: 12 }} sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid size={{ xs: 7 }}>
                  <StyledTextField
                    fullWidth
                    placeholder="Nhập dữ liệu"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    disabled={isLoading}
                  />
                </Grid>
                <Grid size={{ xs: 3 }} sx={{ display: 'flex', alignItems: 'center' }}>
                  <AddButton
                    startIcon={<AddIcon />}
                    onClick={handleAddNew}
                    disabled={!newValue.trim() || isLoading}
                  >
                    Thêm
                  </AddButton>
                </Grid>
              </Grid>
            </AddContainer>
          )}
        </List>
      </StyledPaper>
    </Popper>
  )
}
export default CustomDropdown
