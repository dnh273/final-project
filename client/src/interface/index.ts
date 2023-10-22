interface GiangVien {
  ho_ten: string;
  gioi_tinh: string;
  nam_sinh: number;
  hoc_vi: string;
  chuc_vu: string | null;
  khoa: string;
  dien_thoai: string;
  email: string;
  loai_hop_dong: string;
  id: number;
  phong_ban: string | null;
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
}

interface ListGiangVien {
  data: GiangVien[];
}

interface INguoiHoc {
  ma_nam_hoc: number;
  nganh: string;
  so_dang_ky: number;
  so_trung_tuyen: number;
  so_nhap_hoc: number;
  diem_trung_tuyen: number;
  so_sinh_vien_quoc_te: number;
  id: number;
}

interface ISoLuongNguoiHoc {
  ma_nam_hoc: number;
  nganh: string;
  nghien_cuu_sinh: number;
  hoc_vien_cao_hoc: number;
  sinh_vien_dai_hoc: number;
  dh_chinh_quy: number;
  dh_khong_chinh_quy: number;
  sinh_vien_cao_dang: number;
  cd_chinh_quy: number;
  cd_khong_chinh_quy: number;
  id: number;
  khac: number;
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
  diem_thi: number;
  nam_nhap_hoc: string;
  nam_tot_nghiep: string;
}

export type {
  GiangVien,
  ListGiangVien,
  INguoiHoc,
  ISoLuongNguoiHoc,
  IGiangVien,
};
