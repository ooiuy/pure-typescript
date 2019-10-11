import {Ipost} from '../service'


export default class DataList{
    container: HTMLUListElement;
    
    constructor(container: HTMLUListElement){
        this.container = container
    }

    renderList(data:Ipost[]){
        data.map((post:Ipost) =>{
            const rowPost = document.createElement('li')
            const postRef = document.createElement('a')
            postRef.href = "#"
            postRef.innerText = post.title
            rowPost.appendChild(postRef)

            postRef.addEventListener('click', (e)=>{
                e.preventDefault()
                alert(post.body)
            })

            this.container.appendChild(rowPost)
        })
    }
}