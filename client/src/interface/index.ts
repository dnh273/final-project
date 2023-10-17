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

interface NguoiHoc {
  ma_nam_hoc: number;
  nganh: string;
  so_dang_ky: number;
  so_trung_tuyen: number;
  so_nhap_hoc: number;
  diem_trung_tuyen: number;
  so_sinh_vien_quoc_te: number;
  id: number;
}

interface SoLuongNguoiHoc {
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
}

export type { GiangVien, ListGiangVien, NguoiHoc, SoLuongNguoiHoc, IGiangVien };