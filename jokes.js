// create an async function
const joke = async () => {
    try {
        // vcreate a variable to hold the result of awaiting "fetch" to get the data from the api
        const random = await fetch('https://api.chucknorris.io/jokes/random',{
            headers: {
                accept:"application/json"
            }
        })
        // convert the result of the "random" variable to json
        const json = await random.json();
        // select the element with the class of jokeText amd modifiy it with the result of the "json" variable
        document.querySelector('.jokeText').innerHTML = json.value
        

    } catch (error){console.log(error)
        
    }
    
}
//  add evenListener to the the button with the id of generate passing the declared async function joke
document.querySelector('#generate').addEventListener('click',joke)

