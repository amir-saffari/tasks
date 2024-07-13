for(let li of document.querySelectorAll("li")){
    let text = li.firstChild.data;
    
    let count = li.getElementsByTagName("li").length;

    alert(text  +  " descendants: " + count);
}