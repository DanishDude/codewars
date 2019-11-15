/* 
function NamedOne(first, last) {
    // -- SHOULD be changed --
        this.firstName = {get: () => first || this.fullName.split(' ')[0]},
        this.lastName = {get: () => last || this.fullName.split(' ')[1]},
        this.fullName = {set: (first, last) => `${first} ${last}` || this.firstName + ' ' + this.lastName}
} */

function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.fullName = this.firstName + ' ' + this.lastName;

    this.setPropertyOf(firstName, 'toto') {
        get: () => 
    }
}
    

var n = new NamedOne('John', 'Doe'); 
//Test.assertEquals( n.fullName, "John Doe", "Wrong full name");
console.log(n);

n.firstName = "Bill";
//Test.assertEquals( n.firstName, "Bill", "Wrong first name");
//Test.assertEquals( n.fullName, "Bill Doe", "Wrong full name");
console.log(n);

n.lastName = "Board";
//Test.assertEquals( n.lastName, "Board", "Wrong last name");
//Test.assertEquals( n.fullName, "Bill Board", "Wrong full name");
console.log(n);

n.fullName = "Giovanni Fabbri";
//Test.assertEquals( n.fullName, "Giovanni Fabbri", "Wrong full name");
//Test.assertEquals( n.lastName, "Fabbri", "Wrong last name");
//Test.assertEquals( n.firstName, "Giovanni", "Wrong first name");
console.log(n);

/* const descriptors = Object.getOwnPropertyDescriptors(n);
console.log(descriptors);

var o = {
    a: 7,
    get b() { 
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    }
  };
  
  console.log(o.a); // 7
  console.log(o.b); // 8
  o.c = 50;
  console.log(o.a); // 25

  var obj = { a: 0 };

Object.defineProperties(obj, {
    'b': { get: function() { return this.a + 1; } },
    'c': { set: function(x) { this.a = x / 2; } }
});

obj.c = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(obj.b); // Runs the getter, which yields a + 1 or 6 */

//NamedOne { firstName: [Getter], lastName: [Getter], fullName: [Setter] }
//NamedOne { firstName: [Getter], lastName: [Getter], fullName: [Setter] }
//NamedOne { firstName: [Getter], lastName: [Getter], fullName: [Setter] }
//NamedOne { firstName: [Getter], lastName: [Getter], fullName: [Setter] }

var person = {
    firstName: 'Jimmy',
    lastName: 'Smith',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName (name) {
        var words = name.toString().split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
}

person.fullName = 'Jack Franklin';
console.log(person.firstName); // Jack
console.log(person.lastName) // Franklin