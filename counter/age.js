// Q Find the Average Age
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 28 },
  ]; 
 
 function Avg(people) {
    if (people.length === 0) {
        return 0; // Return 0 if there are no people
    }
 
    let total = 0;
    for (let i = 0; i < people.length; i++) {
        if (people[i].age !== undefined) {
            total += people[i].age;
        } else {
            
        }
    }
    return total / people.length; 
 }
 
 console.log(Avg(people));
 