

$(document).ready(function(){
    console.log('hello javascript file')

    $(document).on('click', '#download-button', function(){
        console.log('clicked button')
        $.getJSON('/all/articles', function(err,data){
            if (err) throw err
            // console.log(res)
            var articles = []
            articles =  data;
            for (var i=0; i<data.length; i++){
                // console.log('in the front end loop'+ i)
                console.log('in the for loop getting articles')
                $('#articles-append').append('<p>' + data[i].title + '/n' + data[i].link +'/n</p>')
            }
        })
    })
})