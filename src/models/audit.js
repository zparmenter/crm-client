const url = `https://pink-fuzzy-crocodile.cyclic.app/api/v1`

class AuditModel {
    static all = () => {
        return fetch(`${url}/audits`).then(res => res.json())
    }

    static show = (_id) => {
        return fetch(`${url}/audits/${_id}`).then(res => res.json())
    }

    static create = (companyData) => {
        return fetch(`${url}/audits`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(companyData)
        })
        .then(res => res.json())
    }

    static update = (auditData, id) => {
        return fetch(`${url}/audits/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(auditData)
        })
        .then(res => res.json())
    }

    static delete = (id) => {
        return fetch(`${url}/audits/${id}`, {
            method: 'DELETE', 
        })
        .then(res => res.json())
    }
}

export default AuditModel