function tasks(){
    var works = document.querySelector("#works").value;
    var result = document.querySelector("#result");
    if(works==""){
        return false;
    }else{
        var myli = document.createElement("li");
        // styling
        myli.style.display = "flex";
        myli.style.justifyContent = "space-between";
        myli.style.alignItems = "center";
        myli.style.padding = "8px";
        myli.style.background = "#f8f9fa";
        myli.style.marginBottom = "5px";
        myli.style.borderRadius = "5px";
        // styling

    //    making span to recieve data from input  
        var taskText = document.createElement("span");
        taskText.innerText = works;
        //making delete button and styling it 
        var delButton = document.createElement("button");
        delButton.innerText = "Delete";
        delButton.className = "btn btn-danger btn-sm";
        //function of deleting task (built in function)  
        delButton.onclick = function() {
            myli.remove();
        };
        //put in li the span we have made above 
        myli.appendChild(taskText);
        //put also in li del button 
        myli.appendChild(delButton);
        // put li in result ol
        result.appendChild(myli);
        //empty the input after every submit
        document.querySelector("#works").value = "";
        return false;
    }
}