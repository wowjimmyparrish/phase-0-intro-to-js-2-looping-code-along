function writeCards(friends, string) {
    let array = []
for(let i = 0; i < friends.length; i++ ){
    array.push(`Thank you, ${friends[i]}, for the wonderful ${string} gift!`)
}
return array
}

function countDown(x) {

    while(x >= 0) {
        console.log(x)
        x--
    }
    

}
