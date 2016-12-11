$( document ).ready(function() 
    {
        $("#submitButton").click(function()
            {
                var searchTerm = $("#searchBox").val();
                var i = 0
                console.log(searchTerm);
                
                    $.getJSON(
                    "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC",
                    
                    function (response)
                    {
                        for (i; i < 5; i=i+1)
                        {
                        $("#gifOutput").append("<img src=" + response.data[i].images.fixed_width_downsampled.url + ">");
                        }
                    });
                        
            });
    
    });