var moment = require('moment'); // require
moment().format(); 

function parseData(data){
    console.log(data);
}

function formatDate(date){
    return moment(date).format('MM/DD/YYYY hh:mm:ss')
}

module.exports = { parseData, formatDate};

