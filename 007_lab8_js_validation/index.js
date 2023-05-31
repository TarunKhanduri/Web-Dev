function validation(){
    if(document.cform.name.value==""){
        alert("enter valid name");
    }
    if(document.cform.fname.value==""){
        alert("enter valid fathers name");
    }
    if(document.cform.pno.value==""){
        alert("enter valid pno");
    }
    if(document.cform.pno.value<1 || document.cform.pno.value>9999999999){
        alert("enter valid pno");
    }
    if(document.email.value="")
    {
        alert("enter valid email");
    }
    if(document.email.value.indexOf('@')==-1 || document.email.value.indexOf('.')==-1)
    {
        alert("enter valid email");
    }
}