const connection = require('../config/connection');

const postData = ({name , phone , date})=>{
    return connection.query({
        text: 'INSERT INTO members (name ,  phone , date) VALUES ($1,$2,$3);',
        values : [name , phone , date ]
    })

}
module.exports = postData;
