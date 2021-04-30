var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    var data=JSON.parse(this.response);

    //Get all the countries from Asia continent/region using Filter function.
    var reg=data.filter((r)=>r.region=="Asia");
    console.log("ASIAN REGIONS:");    
    console.log(reg);

    //Get all the countries with population of less than 2 lacs using Filter function.
    var pop=data.filter((p)=>{
        return p.population<200000;
    })
    console.log("POPULATION LESS THAN 2LACS:")
    console.log(pop);

    //Print the following details name, capital, flag using forEach function.
    console.log("NAME, CAPITAL & FLAG:")
    data.forEach(function (a){
        console.log("Name: "+a.name);
        console.log("Capital: "+a.capital);
        console.log("Flag: "+a.flag+"\n\n");
    })

    //Print the total population of countries using reduce function.
    let iv=0;   
    var tpop=data.reduce(function(accumulator, cv){
        return accumulator+cv.population;
    },iv)
    console.log("TOTAL POPULATION OF COUNTRIES:");
    console.log(tpop);

    //Print the country which use US Dollars as currency.
    console.log("\nCOUNTIRES WITH US DOLLARS AS THEIR CURRENCY:")
    for(let key in data)
    {
        if(data[key].currencies[0].code=="USD")
        {
            console.log(data[key].name);
        }
    }
}