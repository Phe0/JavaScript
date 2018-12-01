let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
        if(this.checkAvailability(partySize)){
            this.guestCount += partySize
        }
        else {
            console.log('Party could not be seated')
        }
    },
    removeParty: function(partySize) {
        if(this.guestCount >= partySize){
            this.guestCount -= partySize
        }
        else{
            console.log('Party could not be removed')
        }
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))