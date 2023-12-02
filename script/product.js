let main=document.querySelector('main')//declare variable for main tag on product.html page
let items=JSON.parse(localStorage.getItem('items'))//need to get the items from the admin.html ..the objects we pushed to an array
let purchased=[]//everything being purchased must be added to array
main.innerHTML=items.map(function (item,index) {
    return `
    <div>
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    <p>${item.price}</p>
    <button value='${index}' data-add>Add to cart</button>
    </div>
    
    `
}).join('')

function add(index) {
    purchased.push(items[index])
    localStorage.setItem('purchased',JSON.stringify(purchased))
    
}
//add event listener on parent
main.addEventListener('click',function () {
    if (event.target.hasAttribute('data-add')) {
        // alert('button pressed')
        add(event.target.value)
    }
    
})
let a = items.filter(item=>{
    return item.name=='Nike Shoe'
})
