import * as yup from 'yup'
export const customerSchema = yup.object().shape({
  full_name: yup
    .string()
    .required('Vui lòng nhập họ tên')
    .min(2, 'Họ tên phải có ít nhất 2 ký tự'),
  date_of_birth: yup
    .date()
    .nullable()
    .required('Vui lòng chọn ngày sinh')
    .max(new Date(), 'Ngày sinh không thể lớn hơn ngày hiện tại'),
  phone_number: yup
    .string()
    .required('Vui lòng nhập số điện thoại')
    .matches(/^[0-9]+$/, 'Số điện thoại chỉ được chứa số')
    .min(10, 'Số điện thoại phải có ít nhất 10 số')
    .max(11, 'Số điện thoại không được quá 11 số'),
  email: yup
    .string()
    .email('Email không hợp lệ'),
  source: yup
    .string()
    .required('Vui lòng chọn nguồn khách hàng'),
  status: yup
    .string()
    .required('Vui lòng chọn trạng thái')
})
