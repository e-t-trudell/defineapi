console.log("Something tree related...")
function tree(element){
    $.get("https://api.dictionaryapi.dev/api/v2/entries/en/tree", function(data){
        console.log(data[0].meanings[1].definitions[2].definition);
        $('.result').text(data[0].meanings[1].definitions[2].definition);
        }
    )
}

// .definitions[0].definition
// .definitions[0].definition
// /en/tree