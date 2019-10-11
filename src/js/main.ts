import service from './service'
import DataList from './DataList'
import * as C from './constants'

const postList = new DataList(C.dataList)

C.btnFetch.addEventListener('click', ()=>{
    service.fetchAll(postList.renderList)
})