
```
function User(email, name){
  this.email = email
  this.name = name
}

User.prototype.login = function(){
  this.online = false
}

function Admin(...args){
  User.apply(this, args)
  this.role = 'super'
}

Admin.prototype = Object.create(User.prototype)
```

```
proto inheritate 
```

### 1, keyword new
```

let Book = new Object();
Book.property = 'value'
Book.method = function() {}
```

### 2, Ojbect literials
```
let Book = {
  propery: 'value',
  method: function () {}
}
```

### 3, function
```
function Book(title){
  this.title = title
}

Book.prototype.method() { }
let book = new Book('name')
```

### 4, singleton
```
let Book = new function() {
  this.property = 'value';
  this.method = function() {}
}

```
