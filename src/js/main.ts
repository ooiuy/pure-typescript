import service from './service'
import AdminTable from './Table'

const tabel:AdminTable = new AdminTable()
tabel.renderUsers(service.getUsers)



console.log(service.getUsers)