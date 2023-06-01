const input=document.getElementById("input")
const infotext=document.getElementById("info-text")
const meaningcontainer=document.getElementById("meaning-container")
const title=document.getElementById("title")
const meaning=document.getElementById("meaning")
const audio=document.getElementById("audio")

async function fetchAPI(word){
    try {
    infotext.style.display="block" 
    meaningcontainer.style.display="none"
    infotext.innerText=`searching the meaning of word: "${word}"`
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const result= await fetch(url).then((res)=>res.json())
    if(result.title){
      title.innerText=word
      meaning.innerText="N/A"
      audio.style.display="none"
    }
    else{
    infotext.style.display="none" 
    meaningcontainer.style.display="block"
    audio.style.display="inline-flex"
    title.innerText=result[0].word
    meaning.innerText=result[0].meanings[0].definitions[0].definition;
    audio.src=result[0].phonetics[0].audio;
    } 
  }catch (error) {
        console.log(error)
        infotext.innerText=`searching the meaning of word: "OPPS!Try again later"`
    }
    
  }

input.addEventListener("keyup",(e)=>
{
  if(e.target.value && e.key==="Enter")
  fetchAPI(e.target.value)
})






