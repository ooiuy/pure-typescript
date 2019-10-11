export interface Ipost {
    id: number;
    title: string;
    body: string;
    userId: number
}
class Service {
    url = "https://jsonplaceholder.typicode.com/"
    fetchAll(renderData: Function): void {
        fetch(`${this.url}/post`, {
            method: 'get',

        })
            .then(response => {
                return response.json()
            })

            .then(data => {
                renderData(data)
            })
    }
    fetchOne(): Ipost[] {
        return null
    }
}
const service = new Service()

export default service