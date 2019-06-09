const csv = require('csv-parser');  
const fs = require('fs');


function readCsv(){
    

    fs.createReadStream(__dirname+'/csvFiles/DailyData.csv')  
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });
}

exports.default = readCsv
