

$(document).ready(function(){
    $.get('/all/articles', function(err,res){
        if (err) throw err
        console.log(res)
        
    })
})