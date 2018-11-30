let isGuestOneVegan = true
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan){
    console.log('offer vegan food')
}
else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('offer some vegan options food')
}
else {
    console.log('offer all food')
}