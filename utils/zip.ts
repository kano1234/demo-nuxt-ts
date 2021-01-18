import { $axios } from '@/utils/api'

const baseUrl = 'http://localhost:3000/apizip/search'

export default {
  async getZip (zipcode: string) {
    const data = await $axios.get(`${baseUrl}?zipcode=${zipcode}`)
    console.log(data)
    return data
  }
}
