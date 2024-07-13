let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
companies.shift()
console.log(companies);

companies.splice(1,1,"ola");
console.log(companies)

companies.push("amazon");
console.log(companies);