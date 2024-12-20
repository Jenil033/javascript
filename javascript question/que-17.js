function Groups(attendees, groupSize) {
    let groups = [];
    for (let i = 0; i < attendees.length; i += groupSize) {
        groups.push(attendees.slice(i, i + groupSize));
    }
    return groups;
}

let attendees = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
console.log("Groups" + JSON.stringify(Groups(attendees, 3)));