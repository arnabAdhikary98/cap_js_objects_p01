let names = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
let ages = [32, 30, 26, 28, 44]

let users = []

for (let i=0; i<names.length; i++)
{
    let user = {
        name: names[i],
        age: ages[i]
    }
    users.push(user)
}

let output = ""

for (let j=0; j<users.length; j++)
{
    if (users[j].age > 30)
    {
        output += users[j].name + " "
    }
}

console.log(output)