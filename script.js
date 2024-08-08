// let a = "13";
// let b = "18";
// if (a % 2 == 0) {
//   console.log("even number");
// } else {
//   console.log("odd number");
// }
// if (b % 2 == 0) {
//   console.log("even number");
// } else {
//   console.log("odd number");
// }
// let birthday = window.prompt("enter your year of birth");
// let age = 2024 - birthday;

// if (age >= 18) {
//   console.log("welcome");
// } else {
//   console.log("not allowed");
// }
// let price = prompt("enter price");
// let advantage = +price + price * 0.14;
// let post = advantage - price;
// console.log(
//   `oldprice ${price} newprice ${advantage} advantageValue ${post}`
// );
let inheritance = +prompt("enter inheritance ");
let x = prompt("does he have a wife?");
let y= 0;
let newInherit =0;
let boyportion =0;
let girlportion=0;

 if (x== "yes" ){
  let y = inheritance*0.125;
  let newInherit = inheritance-y;
  let boyportion =newInherit*(2/3);
  let girlportion=newInherit*(1/3);
  console.log(
    ` wifeRight${y} newInheritIs${newInherit} boyRightIs${boyportion} girlRightIs${girlportion}`);
    document.write(` wifeRight${y} newInheritIs${newInherit} boyRightIs${boyportion} girlRightIs${girlportion}`);
 }else{
  let boyportion =inheritance*(2/3);
  let girlportion=inheritance*(1/3);
  console.log(`boyRightIs${boyportion} girRightIs${girlportion}`);
  document.write(`boyRightIs${boyportion} girRightIs${girlportion}`);
 }
// let amr = confirm("هل الامر امرك؟ ");
// if(amr==true){
//   let thingIndex = confirm("هل في شئ في يدي");
//   if (thingIndex==true){
//     console.log("هشتريلك جزيرة فضي");
//   }else{
//     console.log("انت فقير");
//   }
// }else{
//   console.log("انت فقير");
//  }
//  
// let yourmoney = +prompt("enteryourmoney");
// let gold = 3000 * 85;
// if(yourmoney>=gold){
//   let time =prompt("هل مر عام كامل؟");
//   if (time==true){
//     let zaka = yourmoney*(2.5/100);
//     console.log(zaka);    
//   }else{
//     console.log("لم يمر عام كامل");
//   }
// }else{
//   console.log("القيمة اقل من حد الزكاة");
// }
// let degree= +prompt("enteryour degree");
// if(degree=50){
//   console.log("مقبول");
// }else{
//   console.log("loser")
// }  
//   if(degree=65){
//     console.log("جيد");
//   }else{
//     console.log("مقبول");
//   }
//   if(degree=75){
//     console.log("جيدجدا");
//   }else{
//     console.log("جيد");
//   }
//   if(degree=85){
//     console.log("امتياز");
//   }else{ 
//   console.log("جيدجدا");
// } if(degree=100){
//   console.log("امتياز");
// }else{
//   console.log("over ya mot5alaf");
// }























