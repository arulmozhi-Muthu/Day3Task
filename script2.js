let obj_1 = {name:"John", age:20}
let obj_2 = {age:20, name:"John"}
//const obj_1 = JSON.parse(txt_1);
//const obj_2 = JSON.parse(txt_2);

var result = "";

for (const property in obj_1) {
  //alert(`${obj_1[property]}`+' '+`${obj_2[property]}`+' '+`${obj_1[property]}` === `${obj_2[property]}`)
  if(obj_1[property]===obj_2[property]){
  	result = 'MATCHED';
  }else{
    result = 'NOT MATCHED';
    break;
  }
  
}
console.log('Given two objects are '+result);