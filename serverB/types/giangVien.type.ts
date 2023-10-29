export interface IGiangVien {
  _id: string;
  ho_ten: string;
  gioi_tinh: string;
  nam_sinh: number;
  email: string;
  hoc_vi: string;
  chuc_vu: null | string;
  khoa: string;
  dien_thoai: string;
  loai_hop_dong: string;
  nghien_cuu_khoa_hoc: string[];
  sach: string[];
  phong_ban: null | string;
  hoi_thao: string[];
  tap_chi: string[];
  createdAt: NativeDate;
  updatedAt: NativeDate;
}
