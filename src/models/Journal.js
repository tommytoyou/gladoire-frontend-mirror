import axios from 'axios';




class JournalModel {
    static all = () => {
        let request = axios.get(endPoint)
        return requestAnimationFrame
    }

    static create = (journal) => {
        let request = axios.post(endPoint, journal)
        return request
    }
    
    static delete = (journal) => {
        let request = axios.delete(`${endPOint}/${journal._id}`)
        return request
    }

    static update = (journal) => {
        let request = axios.put(`${endPoint}/${journal._id}`, journal)
        return request
    }
}

export default JournalModel;