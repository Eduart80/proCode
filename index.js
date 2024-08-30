let countEl = document.getElementById('countNumber')
const pastCountNumber = document.getElementById('pastCount')
let count=0
let savedNumber

function add(){
   count += 1
   countEl.innerText = count
}

function save(){
    if(count > 0){
        let saveEntry = count + '-'
        pastCountNumber.textContent += saveEntry
        countEl.textContent = 0
        count=0
    }
}
function clearAll(){
    countEl.textContent = 0
    pastCountNumber.textContent=''
    count=0
}