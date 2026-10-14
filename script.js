//task 1//
const a=[120,60,899];
console.log(a.reduce((t,m)=> t+m,0));

//

//task 2//

const stud =[{name : " swetha",marks:50},{name :"kiran",mark:80},{name :"swathi",mark:90}];
console.log(stud.find((s) => s.name="kiran"));

//task 3//
function create(name) {
    const greet = "hello"; 
    return function() {
        console.log(`${greet} ${name}`);
    };
}
const bb = create("asha");

bb(); 

// task 4//
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
 
  fetchData();