var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);
    for(var i=0;i<res.length;i++){
        console.log(res[i].name.common,res[i].flags.png);
        console.log("country name:"+res[i].name.common,"\n","region:"+res[i].region,"\n","sub-region:"+res[i].subregion,"\n","population:"+res[i].population);
    }
}