import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'
import CustomPagination from './components/Pagination'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

const columns = [
  { id: 'stt', label: '#' },
  { id: 'maKh', label: 'Mã KH' },
  { id: 'name', label: 'Họ và tên' },
  { id: 'phone', label: 'SĐT' },
  { id: 'email', label: 'Email' },
  { id: 'nguoiTiepThi', label: 'Người tiếp thị' },
  { id: 'nguon', label: 'Nguồn' },
  { id: 'ghiChu', label: 'Ghi chú' },
  { id: 'ngayTao', label: 'Ngày tạo' }
]
const rows = [
  {
    stt: '1',
    maKh: 'EA09888765',
    name: 'Nguyễn Văn A',
    phone: '0368585812',
    email: 'Nguyenthithanh1209@gmail.com',
    nguoiTiepThi: 'Nguyễn Văn B',
    nguon: 'Website',
    ghiChu: 'Gọi tư vấn ngoài giờ hành chính',
    ngayTao: '06/09/2023'
  },
  {
    stt: '2',
    maKh: 'EA09888766',
    name: 'Trần Thị C',
    phone: '0988888888',
    email: 'tranthic@gmail.com',
    nguoiTiepThi: 'Nguyễn Văn D',
    nguon: 'Email',
    ghiChu: 'Cần hỗ trợ gấp',
    ngayTao: '07/09/2023'
  },
  {
    stt: '3',
    maKh: 'EA09888767',
    name: 'Lê Văn E',
    phone: '0912345678',
    email: 'levane@example.com',
    nguoiTiepThi: 'Nguyễn Văn F',
    nguon: 'Facebook',
    ghiChu: 'Mong muốn tư vấn thêm về sản phẩm',
    ngayTao: '08/09/2023'
  },
  {
    stt: '4',
    maKh: 'EA09888768',
    name: 'Phạm Minh G',
    phone: '0945678910',
    email: 'phamming@gmail.com',
    nguoiTiepThi: 'Nguyễn Văn H',
    nguon: 'Website',
    ghiChu: 'Hỏi về chính sách bảo hành',
    ngayTao: '09/09/2023'
  },
  {
    stt: '5',
    maKh: 'EA09888769',
    name: 'Hoàng Thị I',
    phone: '0356781234',
    email: 'hoangthi@example.com',
    nguoiTiepThi: 'Nguyễn Văn J',
    nguon: 'Email',
    ghiChu: 'Có nhu cầu khẩn cấp',
    ngayTao: '10/09/2023'
  },
  {
    stt: '6',
    maKh: 'EA09888770',
    name: 'Nguyễn Thị K',
    phone: '0976543210',
    email: 'nguyenthik@gmail.com',
    nguoiTiepThi: 'Nguyễn Văn L',
    nguon: 'Facebook',
    ghiChu: 'Đã mua hàng, cần hướng dẫn sử dụng',
    ngayTao: '11/09/2023'
  },
  {
    stt: '7',
    maKh: 'EA09888771',
    name: 'Trần Minh M',
    phone: '0987564321',
    email: 'tranminh@example.com',
    nguoiTiepThi: 'Nguyễn Văn N',
    nguon: 'Website',
    ghiChu: 'Cần thêm thông tin về sản phẩm',
    ngayTao: '12/09/2023'
  },
  {
    stt: '8',
    maKh: 'EA09888772',
    name: 'Lê Thị O',
    phone: '0918765432',
    email: 'lethi@example.com',
    nguoiTiepThi: 'Nguyễn Văn P',
    nguon: 'Email',
    ghiChu: 'Yêu cầu đổi sản phẩm',
    ngayTao: '13/09/2023'
  },
  {
    stt: '9',
    maKh: 'EA09888773',
    name: 'Hoàng Văn Q',
    phone: '0923456789',
    email: 'hoangvanq@gmail.com',
    nguoiTiepThi: 'Nguyễn Văn R',
    nguon: 'Facebook',
    ghiChu: 'Cần hỗ trợ kỹ thuật',
    ngayTao: '14/09/2023'
  },
  {
    stt: '10',
    maKh: 'EA09888774',
    name: 'Nguyễn Hữu S',
    phone: '0971234567',
    email: 'nguyenhuus@example.com',
    nguoiTiepThi: 'Nguyễn Văn T',
    nguon: 'Website',
    ghiChu: 'Thắc mắc về giá cả',
    ngayTao: '15/09/2023'
  },
  {
    stt: '11',
    maKh: 'EA09888775',
    name: 'Trần Thị U',
    phone: '0931234567',
    email: 'tranthitu@example.com',
    nguoiTiepThi: 'Nguyễn Văn V',
    nguon: 'Email',
    ghiChu: 'Đặt câu hỏi về các ưu đãi',
    ngayTao: '16/09/2023'
  },
  {
    stt: '12',
    maKh: 'EA09888776',
    name: 'Lê Thị W',
    phone: '0923459876',
    email: 'lethiw@example.com',
    nguoiTiepThi: 'Nguyễn Văn X',
    nguon: 'Facebook',
    ghiChu: 'Cần tư vấn về sản phẩm mới',
    ngayTao: '17/09/2023'
  },
  {
    stt: '13',
    maKh: 'EA09888777',
    name: 'Phạm Minh Y',
    phone: '0912349876',
    email: 'phammingy@gmail.com',
    nguoiTiepThi: 'Nguyễn Văn Z',
    nguon: 'Website',
    ghiChu: 'Cần báo giá sản phẩm',
    ngayTao: '18/09/2023'
  },
  {
    stt: '14',
    maKh: 'EA09888778',
    name: 'Nguyễn Thị A',
    phone: '0938567812',
    email: 'nguyenthia@gmail.com',
    nguoiTiepThi: 'Nguyễn Văn B',
    nguon: 'Email',
    ghiChu: 'Yêu cầu xem demo sản phẩm',
    ngayTao: '19/09/2023'
  },
  {
    stt: '15',
    maKh: 'EA09888779',
    name: 'Lê Văn C',
    phone: '0978765432',
    email: 'levanc@example.com',
    nguoiTiepThi: 'Nguyễn Văn C',
    nguon: 'Facebook',
    ghiChu: 'Hỏi về chương trình khuyến mãi và yêu cầu xem sản phầm demo',
    ngayTao: '20/09/2023'
  }
]


export default function ResultTable() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(20)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Paper sx={{ width: '100%', boxShadow: 'none' }}>
          <TableContainer
            sx={{
              overflowX:'scroll',
              maxHeight: 540,
              '&::-webkit-scrollbar': {
                width: '6px',
                height: '6px'
              },
              '&::-webkit-scrollbar-track': {
                background: '#f5f5f5',
                borderRadius: '5px'
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#bdbdbd',
                borderRadius: '3px',
                '&:hover': {
                  background: '#999'
                }
              },
              scrollbarWidth: 'thin',
              scrollbarColor: '#bdbdbd #f5f5f5'
            }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      sx={{
                        color: '#2d2d2d',
                        backgroundColor: '#f2f2f2',
                        fontWeight: 700,
                        fontSize: '14px',
                        padding: '12px 28px',
                        borderBottom: '1px solid #E9ECEF',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={index}
                        sx={{
                          cursor: 'pointer',
                          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#F8F9FA !important',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                          }
                        }}
                      >
                        {columns.map((column) => {
                          const value = row[column.id]
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              sx={{
                                color: '#2d2d2d',
                                fontSize: '14px',
                                fontWeight: 500,
                                padding: '12px 28px',
                                borderBottom: '1px solid #bdbdbd',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              {value}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    )
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          paddingY: '22px',
          paddingRight: '44px',
          justifyContent: {
            xs: 'left',
            md: 'space-between'
          },
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >
        <Grid size={{ xs: 12, sm: 4 }}
          sx={{
            textAlign: { xs: 'center', sm: 'left' },
            mb: { xs: 2, sm: 0 }
          }}
        >
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 400,
              color: '#000000'
            }}
          >
      Hiển thị {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, rows.length)} / {rows.length} hợp đồng
          </Typography>
        </Grid>

        {/* Pagination */}
        <Grid size={{ xs: 12, sm: 8 }}
          sx={{
            textAlign: 'center',
            mb: { xs: 2, sm: 0 }
          }}
        >
          <CustomPagination
            page={page}
            rowsPerPage={rowsPerPage}
            totalRows={rows.length}
            onPageChange={handleChangePage}
          />
        </Grid>
      </Grid>
    </Box>
  )
}