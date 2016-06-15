var fs = require('fs')  
var filename=process.argv[2]
fs.readFile(filename,function callback(err,data){
     if (err) {
          console.log('we found an error')
     }else{
     console.log( data.toString().split('\n').length - 1  )
     }
})