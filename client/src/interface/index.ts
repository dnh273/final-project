interface ILogin {
  email: string;
  password: string;
}

interface IGiangVien {
  _id: string;
  ho_ten: string;
  gioi_tinh: string;
  nam_sinh: number;
  hoc_vi: string;
  chuc_vu: string | null;
  khoa: string;
  dien_thoai: string;
  email: string;
  loai_hop_dong: string;
  phong_ban: string | null;
  sach: ISach[];
}

interface INganhHoc {
  _id: string;
  ten_nganh: string;
}

interface INguoiHoc {
  _id: string;
  ho_ten: string;
  gioi_tinh: string;
  quoc_tich: string;
  loai_nguoi_hoc: string;
  nganh_hoc: INganhHoc;
  ky_tuc_nam: string[];
  diem_thi: number;
  nam_nhap_hoc: string;
  nam_tot_nghiep: string;
}

interface INghienCuuKhoaHoc {
  _id: string;
  ten_de_tai: string;
  loai_de_tai: string;
  nam_hoc: string;
  kinh_phi: bigint;
  doanh_thu: bigint;
}

interface IDat {
  _id: string;
  muc_dich: string;
  ma_khu_dat: string;
  vi_tri: string;
  dien_tich: number;
}

interface IMayTinh {
  _id: string;
  muc_dich: string;
}

interface ISach {
  _id: string;
  ten_sach: string;
  loai_sach: string;
  nam_hoc: string;
}

interface IPhongKyTuc {
  _id: string;
  ky_tuc: string;
  ma_phong: number;
  dien_tich: number;
  so_nguoi_toi_da: number;
}

export type {
  INguoiHoc,
  ILogin,
  IGiangVien,
  INghienCuuKhoaHoc,
  ISach,
  IDat,
  IMayTinh,
  IPhongKyTuc,
};
