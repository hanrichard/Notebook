
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

### 4
```
let Book = new function() {
  this.property = 'value';
  this.method = function() {}
}

```
