//1- Create user if does not exist,add orders if any and return users
// 2- Create and Initialize order's array if it does not exist and add first order and return users
// 3- Add order to existing order's array and return users
// 4- If the item is already ordered return  {msg:"Already ordered!"}

let users = [
    {
      name: "Rajneesh",
      age: 34,
      address: {
        local: "22 Alaknanda",
        city: "Dehradun",
        state: "UK",
      },
      orders: [{ id: 1, name: "GOT Book Series" }],
    },
    {
      name: "Bhavesh",
      age: 37,
      address: {
        local: "48 DT Row",
        city: "Hyderabad",
        state: "AP",
      },
    },
    {
      name: "Jasbir",
      age: 38,
      address: {
        local: "196 Lama Bhavan",
        city: "Gangtok",
        state: "Sikkim",
      },
      orders: [
        { id: 1, name: "Chair" },
        { id: 2, name: "PS5" },
      ],
    },
  ];
  
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

        
    

  
  
  console.log(
    JSON.stringify(
      updateUsers(
        users,
        {
          name: "Rajneesh",
          age: 34,
          address: {
            local: "22 Alaknanda",
            city: "Dehradun",
            state: "UK",
          },
        },
        "GOT Book Series"
      )
    )
  );
  
  console.log(
    JSON.stringify(
      updateUsers(users, {
        name: "Ravi",
        age: 24,
        address: {
          local: "25 Iroda",
          city: "Dehradun",
          state: "UK",
        },
      })
    )
  );
  
  console.log(
    JSON.stringify(
      updateUsers(
        users,
        {
          name: "Ravi",
          age: 24,
          address: {
            local: "25 Iroda",
            city: "Dehradun",
            state: "UK",
          },
        },
        "Chair"
      )
    )
  );
  
  console.log(
    JSON.stringify(
      updateUsers(
        users,
        {
          name: "Rajneesh",
          age: 34,
          address: {
            local: "22 Alaknanda",
            city: "Dehradun",
            state: "UK",
          },
        },
        "Fan"
      )
    )
  );