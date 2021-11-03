const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2)
}
function returnLastTwoDrivers(drivers) {
    return drivers.slice(2, 4)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(i) {
    return function fareMultiplier(fare){
        return fare * i
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers);
}