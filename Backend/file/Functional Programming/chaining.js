let meetups = [
    { name: 'JS', isActive: true, members: 450 },
    { name: 'Angular', isActive: true, members: 900 },
    { name: 'Node', isActive: false, members: 900 },
    { name: 'React', isActive: true, members: 500 }
]

let sumFPChain = meetups.filter((m) => {
    return m.isActive;
})
    .map((m) => {
        return m.members - (0.1 * m.members);
    })
    .reduce((acc, m) => {
        return acc + m;
    }, 0);
console.log(sumFPChain);
