// Q Find the Average Age
/ Q Find the Average Age
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 28 },
  ]; 
 function  findAvgAge(people) {
    let totalAge=0;
        for (let i=0 ;i<people.length;i++){
            totalAge+=people[i].age
        }
        return totalAge/people.length; 
 }
 console.log(findAvgAge(people));
