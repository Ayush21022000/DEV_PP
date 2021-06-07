function updateUsers(users, userObject, item) {
    let Name = userObject.name;
    let found = 0;
    let index = -1;
    for (let i = 0; i < users.length; i++) {
      if (Name == users[i].name) {
        found = 1;
        index = i;
        break;
      }
    }
    if (found == 0) {
      if (item != null) {
        let newUser = {
          name: userObject.name,
          age: Number(userObject.age),
          address: {
            local: userObject.address.local,
            city: userObject.address.city,
            state: userObject.address.state,
          },
          orders: [{ id: 1, name: item }],
        };
        users.push(newUser);
      } else {
        newUser = {
          name: userObject.name,
          age: Number(userObject.age),
          address: {
            local: userObject.address.local,
            city: userObject.address.city,
            state: userObject.address.state,
          },
        };
        users.push(newUser);
      }
    } else {
      if (users[index].hasOwnProperty("orders")) {
        for (let i = 0; i < users[index].orders.length; i++) {
          if (item == users[index].orders[i].name) {
            console.log("Already ordered!!");
            return users;
          }
        }
        let ID = users[index].orders.length + 1;
        users[index].orders.push({ id: ID, name: item });
      } else {
        users[index].orders = [];
        users[index].orders.push({ id: 1, name: item });
      }
    }
    return users;
  }
  //code for Spooning below:
  function print(txt){
    let arr=txt.split(" ");
    console.log(arr);
    var a= arr[0];
    var b=arr[1];
    var c= a.split("");
    var d= b.split("");
    console.log(d[0] + a.substring(1,a.length) + " " + c[0] + b.substring(1,b.length));

}
print("horse riding");
//code for dec to bin conversion:
function getValueInBase(n,b){
    let rv=0;
    let pow=1;
    while(n > 0){
        let rem= n % b;
        rv = rv +(rem*pow);
        pow= pow * 10;
        n= n / b;
    }
    return rv;
 }
 //flattening of object :
 function flat(obj) {
    let ans = {};
    function flatten(obj,parent) {
      for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null && Array.isArray(obj[key]) === false) {
            if(parent==""){
                flatten(obj[key], key);
            }
            else{
             flatten(obj[key], parent + "." + key);
            }
        } else {
          ans[parent + "." + key] = obj[key];
        }
      }
    }
    flatten(obj,"");
    return ans;
  }
  console.log(flat(
    {
        newObj: {
          obj2: {
            obj5: {
              one: 1,
            },
          },
        },
        obj3: {
          obj4: { two: 2 },
        },
      }
  ))
  //rainfall 
  function rainDance(rainfallobj) {
    myObj = []
    for (let i = 0; i < rainfallobj.length; i++) {
        let newobj = {};
        newobj["name"] = rainfallobj[i]["name"];
        let avgRainfall = 0;
        let arr = rainfallobj[i]["rainfall"];
        for (let j = 0; j < arr.length; j++) {
            avgRainfall += arr[j]
        }
        avgRainfall = avgRainfall / (arr.length);
        newobj["avgRainfall"] = avgRainfall;
        myObj.push(newobj);
    }
    return myObj;
}