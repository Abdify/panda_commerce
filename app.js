
function getUserText(){
    let userText = document.querySelector("#search").value;
    console.log(userText);
    if(userText != "") {
        let h1 = document.querySelectorAll("h1") ;
        let h2 = document.querySelectorAll("h2");
        let h3 = document.querySelectorAll("h3") ;
        let h4 = document.querySelectorAll("h4");
        let h5 = document.querySelectorAll("h5") ;
        let h6 = document.querySelectorAll("h6"); 
        let list = [...h1, ...h2, ...h3, ...h4, ...h5, ...h6];
        let serachResult = [];
        let resultList = [];

        for(let i=0;i<list.length;i++){
            let x = list[i].innerHTML;
            
            if(x.toLowerCase().match(userText.toLowerCase()) != null ){
                if(resultList.indexOf(x) === -1){
                    resultList.push(x);
                }
            }
        }
        
        if(resultList.length != 0){
            for(let j=0;j<resultList.length;j++){
                serachResult[j] = document.createElement("li");
                serachResult[j].innerHTML = resultList[j];
                document.querySelector(".search_result_box").appendChild(serachResult[j]);
                
                }
                console.log(resultList);
            document.querySelector(".search_result_box").style.display = "block";        
        }
        else{
            serachResult[0] = document.createElement("li");
            serachResult[0].innerHTML = "No match found!";
            document.querySelector(".search_result_box").appendChild(serachResult[0]);
            
            document.querySelector(".search_result_box").style.display = "block";
        }
        
    }
    else window.alert("Please use ur BRAIN");
}