// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const employee = 
  { name: "Siri", age1: 25, designation: "sd", company:"Infosys"  };

const employee1 = 
  { name: "Siri", designation: "sd", company:"Infosys",age1: 25  };
  
const empKey = Object.keys(employee),  // O(1)
        emp1Key = Object.keys(employee1); // O(1)

const sameKeys = empKey.length === emp1Key.length && empKey.every(ek => employee1?.[ek] || false); // O(n) = n - every

if(!sameKeys) { // O(1)
    console.log(false);
    return;
}

console.log(empKey.every(key => employee[key] === employee1[key])); // O(n) = n - every

