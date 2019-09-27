import C from '../constants'
import {IUser} from '../service/data'

export default class AdminTable{
    private userRow(user:IUser):string{
        return `
        <div class="user__row">
            <span>${user.name}</span>
            <span>${user.surmane}</span>
            <span>${user.age}</span>
            <span>${user.email}</span>
            <span>${user.phone ? user.phone : 'пусто'}</span>
            <span>${user.work ? user.work: 'пусто'}</span>
            <span>${user.hobby ? user.hobby: 'пусто'}</span>
        </div>
        `
    }
    renderUsers(users:IUser[]){
        users.map((user:IUser)=>{
            C.tabel.innerHTML += this.userRow(user)
        })
    }
}