import { mockDataResp } from '../mock/mockGetDataResp'

class _MainApi {

    private apiName = 'MainApi'

    async getData() {
        return mockDataResp
    }

    qkGetData() {
        return [this.apiName, 'getData']
    }
}

const mainApi = new _MainApi()

export { mainApi }