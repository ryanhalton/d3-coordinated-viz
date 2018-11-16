//begin script when window loads
window.onload = setMap();

//set up choropleth map
function setMap(){
    //use queue to parallelize asynchronous data loading
    d3.queue()
        .defer(d3.csv, "data/data.csv") //load attributes from csv
        .defer(d3.json, "data/chicomm.topojson") //load background spatial data
        .await(callback);
    
    function callback(error, csvData, chicago){
        console.log(error);
        console.log(csvData);
        console.log(chicago);
        
    };
};