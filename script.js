const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];
// 1. Print Developers
function printDeveloper() {
  let ans = [];
  for(i = 0; i < data.length; i++){
    if(data[i].profession == "developer")
      ans.push(data[i].name);
  }
  console.log(...ans);
}
// 2. Add Data
function addData() {
  newData = {
      name:prompt("enter a name"),
      age:parseInt(prompt("enter an age")),
      profession:prompt("enter your profession"), 
    };
    data.push(newData);
    console.log(data);
}
// 3. Remove Admins
function removeAdmin() {
  let i = 0;
  while(i < data.length){
    if(data[i].profession == "admin"){
      data.splice(i, 1);
    }else{
      i++;
    }
  }
  console.log(data);
}

// 4. Concatenate Array
function concatenateArray() {
  let arr1=[1, 2, 3, 4];
  let arr2 = [5, 6, 7, 8];
  console.log(arr1.concat(arr2));
}

// 5. Average Age
function averageAge() {
  let sum = 0;
  for(let i = 0; i < data.length; i++){
    sum += data[i].age;
  }
  // print the avg age
  console.log(sum / data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  let res = [];
  for(let i = 0; i < data.length; i++){
    if(data[i].age > 25){
      res.push(data[i].name);
    }
  }
  console.log(...res);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = new Set();
  let ans = [];
  for(let i = 0; i < data.length; i++){
      if(professions.has(data[i].profession) == false){
        ans.push(data.name);
      }
  }
  console.log(...ans);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b)=> a.age - b.age);
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  for(let i = 0; i < data.length; i++){
    if(data[i].name == "john"){
      data[i].profession = "manager";
      break;
    }
  }
}

// 10. Profession Count
function getTotalProfessions() {
  const set = new Set();
  for(i = 0; i < data.length; i++){
    set.add(data[i].profession);
  }
  console.log(set.size);
}
