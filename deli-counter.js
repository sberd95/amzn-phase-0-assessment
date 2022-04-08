// 1. Write your functions here

//line function takes in an array
//returns string containing everyone along with their position in line
//no side effects
//if the line is empty, say so

function line(array) {
    if (array.length === 0) {
        return "The line is currently empty."
    }
    //using for loop with index to record position and name to accumulating variable
    let readout = ''
    for (let i = 0; i < array.length; i++) {
        readout += ` ${i + 1}. ${array[i]}`
    }
    return "The line is currently:" + readout
}

//takenumber function accepts an array of the current line, and a string containing the person joining the line
//returns a console log saying their name and position in line
//updates the line array with that name

function takeANumber(array, name) {
    const pos = array.push(name)
    return console.log(`Welcome, ${name}. You are number ${pos} in line.`)
}
//nowServing fn accepts an array of the current line
//returns a console log of the next person in line
//removes that person from the line
//if there's no one left, say there's nobody waiting

function nowServing(array) {
    if (array.length === 0) {
        return console.log("There is nobody waiting to be served!")
    }
    const cust = array.shift()
    return console.log(`Currently serving ${cust}.`)
}

// Extra functions
function closingTime(array) {
    const time = new Date()
    if (time.getHours() >= 21 || time.getHours() <= 9) {
        array.length = 0
        return console.log("The deli is now closed, come again tomorrow!")
    } 
}

let tickets = 10
function takeANumberPlus(array, name) {
    tickets--
    const pos = array.push(name)
    let ticketStatus = ''
    let safetyStatus = ''
    if (tickets <= 0) {
        ticketStatus = " We're out of printer paper, but we won't forget about you!"
    }
    else if (tickets <= 3) {
        ticketStatus = " Printer paper low."
    }
    if (array.length <= 3){
        return console.log(`Welcome, ${name}. You are number ${pos} in line.` + ticketStatus)
    }
    else {
        return console.log(`Welcome, ${name}. You are number ${pos} in line with an expected wait time of ${(pos - 1) * 2} minutes.` + ticketStatus)
    }
}

// 2. Example Usage

// const katzDeli = []

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"

// takeANumberPlus(katzDeli, "Ada")
// takeANumberPlus(katzDeli, "Michael")
// console.log(line(katzDeli))
// takeANumberPlus(katzDeli, "Bryce")
// takeANumberPlus(katzDeli, "Fiona")
// takeANumberPlus(katzDeli, "Lucy")
// takeANumberPlus(katzDeli, "Adam")
// takeANumberPlus(katzDeli, "Mike")
// console.log(line(katzDeli))
// takeANumberPlus(katzDeli, "Catherine")
// takeANumberPlus(katzDeli, "Alex")
// takeANumberPlus(katzDeli, "Dominic")
// takeANumberPlus(katzDeli, "Hank")
// takeANumberPlus(katzDeli, "Jada")
// console.log(line(katzDeli))
// nowServing(katzDeli)
// nowServing(katzDeli)
// nowServing(katzDeli)
// nowServing(katzDeli)
// nowServing(katzDeli)
// nowServing(katzDeli)
// nowServing(katzDeli)
// console.log(line(katzDeli))
// nowServing(katzDeli)
// nowServing(katzDeli)
// nowServing(katzDeli)
// nowServing(katzDeli)
// nowServing(katzDeli)
// nowServing(katzDeli)
// console.log(line(katzDeli))