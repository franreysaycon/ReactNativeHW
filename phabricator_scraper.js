
var b = document.getElementsByClassName("aphront-multi-column-column-outer aphront-multi-colum-column-outer-last");
var c = b[0].getElementsByClassName("phui-oi-objname");
for(i=0;i<c.length;i++){
    c[i].textContent;
}

var b = document.getElementsByClassName("aphront-multi-column-column-outer");
for(i=0;i<b.length;i++){
	console.log(b[i].getElementsByClassName("phui-header-header")[0].textContent);
	var c = b[i].getElementsByClassName("phui-oi-objname");
	for(j=0; j<c.length; j++){
		console.log(c[j].textContent);
	}
}
