let countEl = document.getElementById("count-el"); 
let savedCountsEl = document.getElementById("saved-counts");
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;

} 

// 1. Create a function, save(), which logs out the count when it's called

function save() {
     let countStr = count + " => "
    savedCountsEl.innerText += countStr
    countEl.innerText = 0;
    count = 0;
    
}
save()


function reset() {
  let resetStr = 0;
   savedCountsEl.innerText ="Passengers Entered: =>" + resetStr ;
   

}