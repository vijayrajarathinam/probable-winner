const emp1 = 
  { name: "Siri", age1: 25, designation: "sd", company:"Infosys"  };

const emp2 = 
  { name: "Siri", designation: "sd", company:"Infosys",age1: 25  };
  

function compareObj<T extends {[index: string]: string | number}>
    (employee:T, employee1:T):boolean {
        const empKey = Object.keys(employee) ,  // O(1)
            emp1Key = Object.keys(employee1); // O(1)

        const sameKeys = empKey.length === emp1Key.length && 
                           empKey.every(ek => employee1?.[ek] || false); // O(n) = n - every
        if(!sameKeys) return false;

        return empKey.every(key => employee?.[key] === employee1?.[key]); // O(n) = n - every
}

console.log(compareObj(emp1, emp2));
