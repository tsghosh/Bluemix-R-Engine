/**
 * invoke remote R Job
 */
'use strict';
var dashdbClient = require('/client/dashdbclient');
var rClient = dashdbClient();

rClient.post('/analytics/r/stat_calc.R',{},function(err,data){
    if(!err)
        console.log('Exeuted Ok')
    else
        console.log('Exeuted Failed')
    });
    

