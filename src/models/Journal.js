import axios from 'axios';


const endPoint ="http://localhost:9393/api/v1/journal"


class JournalModel {
    // static all = () => {
    //     let request = axios.get(endPoint)
    //     return requestAnimationFrame
    // }

    static create = (journal) => {
        let request = axios.post(endPoint, journal)
        return request
    }
    
    static delete = (journal) => {
        let request = axios.delete(`${endPoint}/${journal._id}`)
        return request
    }

    static update = (journal) => {
        let request = axios.put(`${endPoint}/${journal._id}`, journal)
        return request
    }
}

export default JournalModel;