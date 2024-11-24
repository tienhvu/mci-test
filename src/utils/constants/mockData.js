
export const cityOptions = [
  { value: 'HN', label: 'Hà Nội' },
  { value: 'HCM', label: 'TP. Hồ Chí Minh' },
  { value: 'DN', label: 'Đà Nẵng' },
  { value: 'HP', label: 'Hải Phòng' },
  { value: 'CT', label: 'Cần Thơ' },
  { value: 'BD', label: 'Bình Dương' },
  { value: 'DN2', label: 'Đồng Nai' },
  { value: 'QN', label: 'Quảng Ninh' },
  { value: 'TH', label: 'Thanh Hóa' },
  { value: 'NT', label: 'Nha Trang' }
]

export const districtOptions = {
  HN: [
    { value: 'HK', label: 'Hoàn Kiếm' },
    { value: 'BD', label: 'Ba Đình' },
    { value: 'HBT', label: 'Hai Bà Trưng' },
    { value: 'TX', label: 'Thanh Xuân' },
    { value: 'CG', label: 'Cầu Giấy' }
  ],
  HCM: [
    { value: 'Q1', label: 'Quận 1' },
    { value: 'Q3', label: 'Quận 3' },
    { value: 'Q7', label: 'Quận 7' },
    { value: 'TB', label: 'Tân Bình' },
    { value: 'PN', label: 'Phú Nhuận' }
  ],
  DN: [
    { value: 'HV', label: 'Hải Châu' },
    { value: 'TK', label: 'Thanh Khê' },
    { value: 'ST', label: 'Sơn Trà' },
    { value: 'LC', label: 'Liên Chiểu' },
    { value: 'NH', label: 'Ngũ Hành Sơn' }
  ],
  HP: [
    { value: 'NG', label: 'Ngô Quyền' },
    { value: 'HB', label: 'Hồng Bàng' },
    { value: 'LC', label: 'Lê Chân' },
    { value: 'KA', label: 'Kiến An' }
  ],
  CT: [
    { value: 'NK', label: 'Ninh Kiều' },
    { value: 'BT', label: 'Bình Thủy' },
    { value: 'CR', label: 'Cái Răng' },
    { value: 'OM', label: 'Ô Môn' }
  ],
  BD: [
    { value: 'TD', label: 'Thủ Dầu Một' },
    { value: 'TU', label: 'Thuận An' },
    { value: 'DI', label: 'Dĩ An' }
  ],
  DN2: [
    { value: 'BA', label: 'Biên Hòa' },
    { value: 'LK', label: 'Long Khánh' },
    { value: 'NT', label: 'Nhơn Trạch' }
  ],
  QN: [
    { value: 'HL', label: 'Hạ Long' },
    { value: 'CM', label: 'Cẩm Phả' },
    { value: 'UC', label: 'Uông Bí' }
  ],
  TH: [
    { value: 'TP', label: 'TP Thanh Hóa' },
    { value: 'BT', label: 'Bỉm Sơn' },
    { value: 'SL', label: 'Sầm Sơn' }
  ],
  NT: [
    { value: 'TP', label: 'TP Nha Trang' },
    { value: 'VC', label: 'Vĩnh Cam' },
    { value: 'PV', label: 'Phước Vĩnh' }
  ]
}

export const wardOptions = {
  HK: [
    { value: 'PC', label: 'Phường Phan Chu Trinh' },
    { value: 'LT', label: 'Phường Lý Thái Tổ' },
    { value: 'HG', label: 'Phường Hàng Gai' },
    { value: 'HB', label: 'Phường Hàng Bông' }
  ],
  BD: [
    { value: 'CX', label: 'Phường Cống Vị' },
    { value: 'DX', label: 'Phường Điện Biên' },
    { value: 'LN', label: 'Phường Liễu Giai' },
    { value: 'NC', label: 'Phường Ngọc Hà' }
  ],
  Q1: [
    { value: 'BN', label: 'Phường Bến Nghé' },
    { value: 'BT', label: 'Phường Bến Thành' },
    { value: 'CK', label: 'Phường Cầu Kho' },
    { value: 'CL', label: 'Phường Cầu Ông Lãnh' }
  ]
}

export const timeSlotOptions = [
  { value: '0800', label: '08:00 - 10:00' },
  { value: '1000', label: '10:00 - 12:00' },
  { value: '1330', label: '13:30 - 15:30' },
  { value: '1530', label: '15:30 - 17:30' },
  { value: '1730', label: '17:30 - 19:30' }
]

export const getDistrictsByCity = (cityCode) => {
  return districtOptions[cityCode] || []
}

export const getWardsByDistrict = (districtCode) => {
  return wardOptions[districtCode] || []
}