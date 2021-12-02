const url = `https://highstreethub.herokuapp.com/api/v1`

class CompanyModel {
    static all = () => {
        return fetch(`${url}/companies`).then(res => res.json())
    }

    static show = (_id) => {
        return fetch(`${url}/companies/${_id}`).then(res => res.json())
    }

    static create = (companyData) => {
        return fetch(`${url}/companies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(companyData)
        })
        .then(res => res.json())
    }

    static update = (companyData, id) => {
        return fetch(`${url}/companies/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(companyData)
        })
        .then(res => res.json())
    }

    static delete = (id) => {
        return fetch(`${url}/companies/${id}`, {
            method: 'DELETE', 
        })
        .then(res => res.json())
    }
}

export default CompanyModel