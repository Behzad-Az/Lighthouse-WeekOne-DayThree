function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

var data =
  {"f01": {name: "Alice",
           age: 15,
           follows: ["f02", "f03", "f04"]},
   "f02": {name: "Bob",
           age: 20,
           follows: ["f05", "f06"]},
   "f03": {name: "Charlie",
           age: 35,
           follows: ["f01", "f04", "f06"]},
   "f04": {name: "Debbie",
           age: 40,
           follows: ["f01", "f02", "f03", "f05", "f06"]},
   "f05": {name: "Elizabeth",
           age: 45,
           follows: ["f04"]},
   "f06": {name: "Finn",
           age: 25,
           follows: ["f05"]},

    listUsers: function () {
      var listOfUsers = [];
      for (var user in this) {
        if (this.hasOwnProperty(user) && typeof(this[user]) !== "function") {
            listOfUsers.push(user);
        }
      }
      return listOfUsers;
    },


    whoFollowsWho: function (listOfUsers) {
      listOfUsers.forEach( (element) => {
        this[element].followers = [];
        this[element].followersName = [];
        this[element].iFollow = [];
        for (var user in this) {
          if (this.hasOwnProperty(user) && typeof(this[user]) !== "function") {
            if (isInArray(element,this[user].follows)) {
              this[element].followers.push(user);
              this[element].followersName.push(this[user].name);
            }
          }
        }
      });
    },


    printOutUserInfo: function () {
      console.log("   Printing user information:")
      var output = "";
      for (var user in this) {
          if (this.hasOwnProperty(user) && typeof(this[user]) !== "function") {
            output += "Name: " + this[user].name + "\n" +
                      "age: " + this[user].age + "\n" +
                      "follows: " + this[user].iFollow.join(', ') + "\n" +
                      "followers are: " + this[user].followersName.join(', ') + "\n \n";
          }
      }
      console.log(output.substring(0, output.length - 3));
    },


    numOfFollowers: function () {
      console.log("\n   Printing follower report:");
      for (var user in this) {
        var overThirtyFollowers = 0;
        if (this.hasOwnProperty(user) && typeof(this[user]) !== "function") {
          this[user].totalFollowers = this[user].followers.length;
          this[user].overThirtyFollowers = 0;


          this[user].followers.forEach((element) => {
            if (this[element].age > 30) { this[user].overThirtyFollowers++; }
          });
          console.log(this[user].name + " has " + this[user].totalFollowers + " total followers including " +
                                        this[user].overThirtyFollowers + " over 30 year-old followers.");
        }
      }
    },


    numOfFollows: function () {
      console.log("\n   Printing follows report:");
      for (var user in this) {
        var overThirtyFollows = 0;
        if (this.hasOwnProperty(user) && typeof(this[user]) !== "function") {
          this[user].totalFollows = this[user].follows.length;
          this[user].overThirtyFollows = 0;
          this[user].follows.forEach((element) => {
            if (this[element].age > 30) { this[user].overThirtyFollows++; }
          });
          console.log(this[user].name + " has " + this[user].totalFollows + " total follows including " +
                                        this[user].overThirtyFollows + " over 30 year-old follows.");
        }
      }
    },


    mostFollowers: function() {
      console.log("\n   Printing most followers report:");
      var followerCount = 0;
      var followerOverThirtyCount = 0;
      var mostFollowers = "";
      var mostFollowersOverThirty = "";
      for (var user in this) {
        if (this.hasOwnProperty(user) && typeof(this[user]) !== "function") {
          if (this[user].totalFollowers > followerCount) { mostFollowers = this[user].name; }
          if (this[user].overThirtyFollowers > followerOverThirtyCount) { mostFollowersOverThirty = this[user].name; }

        }
      }
      console.log("Most followers belong to: " + mostFollowers + " and most followers over 30 belong to: " + mostFollowersOverThirty);
    },


    mostFollows: function() {
      console.log("\n   Printing most follows report:");
      var followCount = 0;
      var followOverThirtyCount = 0;
      var mostFollows = "";
      var mostFollowsOverThirty = "";
      for (var user in this) {
        if (this.hasOwnProperty(user) && typeof(this[user]) !== "function") {
          if (this[user].totalFollows > followCount) { mostFollows = this[user].name; }
          if (this[user].overThirtyFollows > followOverThirtyCount) { mostFollowOverThirty = this[user].name; }

        }
      }
      console.log("Most follows belong to: " + mostFollows + " and most follows over 30 belong to: " + mostFollowsOverThirty);
    },


    whoFollowsSomeoneNotFollowingThem: function () {
      console.log("\n   Printing who is not following someone who follows them:")
      for (var user in this) {
        if (this.hasOwnProperty(user) && typeof(this[user]) !== "function") {
          this[user].friendReport = "" //"Anyone " + this[user].name + " follows also follows him/her";


          this[user].follows.forEach((element)=>{
            if (!isInArray(user,this[element].follows)) {
              this[user].friendReport += this[user].name + " follows " + this[element].name + " but not vice-versa! ";
            }
          });
          console.log(this[user].friendReport);
        }
      }
    },


    extendedNetwork: function () {
      console.log("\n   Printing user extended networks:");
      var tempArr = [];
      for (var user in this) {
         if (this.hasOwnProperty(user) && typeof(this[user]) !== "function") {
            tempArr = this[user].followersName;
            debugger;
            this[user].followers.forEach((element)=> {
              tempArr = tempArr.concat(this[element].followersName);
              debugger;
            });
            this[user].extendedNetwork = new Set (tempArr);
            console.log(this[user].extendedNetwork);
         }
      }
    }

  }

data.whoFollowsWho(data.listUsers());
data.printOutUserInfo();
data.numOfFollowers();
data.numOfFollows();
data.mostFollowers();
data.mostFollows();
data.whoFollowsSomeoneNotFollowingThem();
data.extendedNetwork();