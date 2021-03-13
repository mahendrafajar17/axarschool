let meetups = [
    { name: 'JS', isActive: true, members: 450 },
    { name: 'Angular', isActive: true, members: 900 },
    { name: 'Node', isActive: false, members: 900 }
]

let activeMeetups = [];
activeMeetups = (meetups.filter((m)=> {
    return m.isActive;
}))
console.log(activeMeetups);