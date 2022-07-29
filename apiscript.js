console.log("Something tree related...")
function tree(element){
    const name = document.querySelector(".search").value;

    $.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${name}`, function(data){
        console.log(data[0].meanings[0].definitions[0].definition);
        $('.result').text(data[0].meanings[0].definitions[0].definition);
        }
    )
}
// tree();




// .definitions[0].definition
// .definitions[0].definition
// /en/tree