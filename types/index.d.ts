export interface ZipResponse {
  status: number,
  message: string,
  prefecture: string,
  city: string,
  restOfAddress: string
}

export interface SearchCond {
  type: number,
  value: string
}

export interface UserInfo {
  id: string,
  name: string,
  zip: string,
  tel: string,
  createAt: string
}
