//year according to time
var now=new Date()
var year=now.getFullYear();
document.getElementById("year").innerHTML=year

//output function
// const showOutput = (output) =>{
//     document.getElementById('output').innerHTML=output;
// }            ----OR----
var result=document.getElementById("output")

//where we at
function whereAt(){
    // let bTn1=window.location.href;
    // console.log(bTn1)
    // showOutput(bTn1)        -----OR----
    console.log(window.location.href)
    result.innerHTML=window.location.href
}

// go to google
function goToGoogle() {
    window.location.href = "http://google.com";
 
 }
 // replace url
 function replaceUrl() {
    window.location.replace("http://google.com")
 }
 
 var popupWindow;
 // Open popup
 function openPopup() {
    popupWindow = window.open("", 'mywindow', "width=420,height=300,left=200,top=100");
    // popupWindow.location.assign("http://google.com")
    // -------we can also set the time-----//
    // setTimeout(() => {
    //    popupWindow.close();
    // }, 5000)
  
 }
 //fil content
 function fillContent() {
    popupWindow.document.write("<h1>usmanpgmr@gmail.com</h1>")
 
 }
 
 //assign url
 function assignURL() {
    popupWindow.location.assign("https://techna.pk")
 
 }
 //close popup
 function closePopup() {
    popupWindow.close();
 }






// -------------------use for finding the error-------------------//
//   try{
//    aler("Alert")
// }
// catch (error) {
//    console.log(error)
//    console.warn(error)
//    console.error(error)