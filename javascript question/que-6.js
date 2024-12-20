function isSeatAvailable(seats, seatNumber) {
    for (let seat of seats) {
        if (seat === seatNumber) {
            return true;
        }
    }
    return false;
}

const availableSeats = [3, 5, 7, 9, 12];
console.log(isSeatAvailable(availableSeats, 7)); 
