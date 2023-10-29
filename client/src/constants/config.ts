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
  { stt: "1", text: "nghiên cứu sinh" },
  { stt: "2", text: "học viên cao học" },
  { stt: "3", text: "sinh viên chính quy" },
  { stt: "4", text: "sinh viên không chính quy" },
  { stt: "5", text: "sinh viên cao đẳng" },
  { stt: "", text: "sinh viên cao đẳng chính quy" },
  { stt: "", text: "sinh viên cao đẳng không chính quy" },
  { stt: "", text: "khác" },
];

const ListDeTai = [
  { loai_de_tai: "Đề tài cấp NN", he_so: 2 },
  { loai_de_tai: "Đề tài cấp Tỉnh/Bộ", he_so: 1 },
  { loai_de_tai: "Đề tài cấp trường", he_so: 0.5 },
  { loai_de_tai: "Đề tài hợp tác doanh nghiệp", he_so: 0.5 },
];

const ListLoaiSach = [
  "Sách chuyên khảo",
  "Sách tham khảo",
  "Sách giáo trình",
  "Sách hương dẫn",
];

export {
  DOMAIN,
  ListLoaiNguoiHoc,
  ListNamHoc,
  ListNganh,
  ListDeTai,
  ListLoaiSach,
};
