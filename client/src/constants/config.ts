const DOMAIN = "http://localhost:4000";

const ListNganh = [
  "Công nghệ thông tin",
  "Kỹ thuật máy tính",
  "Vật lý kỹ thuật",
  "Cơ kỹ thuật",
  "Công nghệ kỹ thuật xây dựng",
  "Công nghệ hàng không vũ trụ",
  "Kỹ thuật điều khiển và tự động hóa",
  "Khoa học máy tính",
  "Công nghệ kỹ thuật điện tử viễn thông",
  "Mạng máy tính và truyền thông dữ liệu",
];

const ListNamHoc = [
  "2017-2018",
  "2018-2019",
  "2019-2020",
  "2020-2021",
  "2021-2022",
];

const ListLoaiNguoiHoc = [
  {
    stt: "1",
    conditional: ["nghiên cứu sinh"],
    displayTextNhapHoc: "Nghiên cứu sinh",
    displayTextTotNghiep: "Nghiên cứu sinh bảo vệ thành công luận án tiến sĩ",
  },
  {
    stt: "2",
    conditional: ["học viên cao học"],
    displayTextNhapHoc: "Học viên cao học",
    displayTextTotNghiep: "Học viên tốt nghiệp cao học",
  },
  {
    stt: "3",
    conditional: ["sinh viên chính quy", "sinh viên không chính quy"],
    displayTextNhapHoc: "Sinh viên đại học",
    displayTextTotNghiep: "Sinh viên tốt nghiệp đại học",
    child: true,
  },
  {
    conditional: ["sinh viên chính quy"],
    displayTextNhapHoc: "Hệ chính quy",
    displayTextTotNghiep: "Hệ chính quy",
  },
  {
    conditional: ["sinh viên không chính quy"],
    displayTextNhapHoc: "Hệ không chính quy",
    displayTextTotNghiep: "Hệ không chính quy",
  },
  {
    stt: "4",
    conditional: ["sinh viên cao đẳng"],
    displayTextNhapHoc: "Sinh viên cao đẳng",
    displayTextTotNghiep: "Sinh viên tốt nghiệp cao đẳng",
    child: true,
  },
  {
    conditional: ["sinh viên cao đẳng chính quy"],
    displayTextNhapHoc: "Hệ chính quy",
    displayTextTotNghiep: "Hệ chính quy",
  },
  {
    conditional: ["sinh viên cao đẳng không chính quy"],
    displayTextNhapHoc: "Hệ không chính quy",
    displayTextTotNghiep: "Hệ không chính quy",
  },
  {
    stt: "5",
    conditional: ["học sinh TCCN"],
    displayTextNhapHoc: "Học sinh TCCN",
    displayTextTotNghiep: "Học sinh tốt nghiệp TCCN",
    child: true,
  },
  {
    conditional: ["học sinh TCCN đẳng chính quy"],
    displayTextNhapHoc: "Hệ chính quy",
    displayTextTotNghiep: "Hệ chính quy",
  },
  {
    conditional: ["học sinh TCCN đẳng không chính quy"],
    displayTextNhapHoc: "Hệ không chính quy",
    displayTextTotNghiep: "Hệ không chính quy",
  },
  {
    stt: "6",
    conditional: ["khác"],
    displayTextNhapHoc: "khác",
    displayTextTotNghiep: "khác",
  },
];

const ListDeTai = [
  { loai_de_tai: "Đề tài cấp NN", he_so: 2 },
  { loai_de_tai: "Đề tài cấp Tỉnh/Bộ", he_so: 1 },
  { loai_de_tai: "Đề tài cấp trường", he_so: 0.5 },
  { loai_de_tai: "Đề tài hợp tác doanh nghiệp", he_so: 0.5 },
];

const ListLoaiSach = [
  { loai_sach: "Sách chuyên khảo", he_so: 2 },
  { loai_sach: "Sách tham khảo", he_so: 1.5 },
  { loai_sach: "Sách giáo trình", he_so: 1 },
  { loai_sach: "Sách hướng dẫn", he_so: 0.5 },
];

export {
  DOMAIN,
  ListLoaiNguoiHoc,
  ListNamHoc,
  ListNganh,
  ListDeTai,
  ListLoaiSach,
};
