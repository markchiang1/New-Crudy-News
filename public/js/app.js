

$(document).ready(function(){
    $.get('/all/articles', function(err,res){
        if (err) throw err
        console.log(res)
        var list = res
        for (i in list[i]){
            var title = list[i].title
            console.log('title:' + title)
            var url = list[i].link
            console.log('url:' + url)
            if(url[0]!=='h'){
                let link = 'https:/'+url
            }
            else{
                link = url
            }
            console.log(link)
        }
    })
})