
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
