

$(document).ready(function(){
    console.log('hello javascript file')

    $(document).on('click', '#download-button', function(){
        console.log('clicked button')
        $.getJSON('/all/articles', function(data, err){
            if (err) console.log(err);
            // console.log(data)
            // var articles = []
            // articles =  data;
            for (var i=0; i<data.length; i++){
                // console.log('in the front end loop'+ i)
                // console.log('in the for loop getting articles')
                // console.log(data[i]);
                
                $('#articles-append').append('<ol>' + data[i].title + '</ol><p>' + data[i].link +'</p>')
            }
        })  
    })
})