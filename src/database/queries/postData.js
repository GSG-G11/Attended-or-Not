const connection = require('../config/connection');

const postData = ({program , sessions , time})=>{
    return connection.query({
        text: 'INSERT INTO program (time , num_session ,name ) VALUES ($1,$2,$3) ;',
        values : [time , sessions ,program ]
    })

}
module.exports = postData;
