


async function getdata(pageno,author ) {
    let res = await fetch(`http://localhost:3000/images?_page=${pageno}&_limit=12 ?author.name=${author}`)
    let data = await res.json();
 
 showdata(data)
  }
  
  
 

let box=document.querySelector("#box")

let prev=document.querySelector("#prev")
let next=document.querySelector("#next")
let page=document.querySelector("#page")

let form=document.querySelector("#form")

form.addEventListener("submit" , (event)=>{addData(event)})

function addData (event){
    event.preventDefault()

    let author=event.target[0].value

    
    let obj={
        author
    }
    getdata(1,author)
}



prev.addEventListener("click",()=>{pagechange("prev")})
next.addEventListener("click",()=>{pagechange("next")})

let pageno=1
 
async function pagechange (cond){
    
    page.innerHTML=pageno
 
    if(cond=="prev"){
        pageno --;
        getdata(pageno)
    }
    
    else{
        getdata(pageno)
        pageno ++;
        
    }

    if(pageno<=0){
        pageno=1
    }
}

getdata(1)

 async function showdata(data){

   

    data.forEach((ele) => {

        let card=document.createElement("div")
           card.style.borderRadius="14px"
          
        let author=document.createElement("p")
          author.innerHTML=`<b>Author<b> : ${ele.author}`
          author.style.textAlign="center"

          let image =document.createElement("img")
          image.src=ele.download_url

          card.append(image,author)
          box.append(card)
        
    })
}



