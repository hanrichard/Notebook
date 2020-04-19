### header
```
x-auth-token
```


```
Content-Type
```


```
router.get('/me', auth, async (req, res) => {
  try {
  
  } catch(err) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
})

router.get('/', async (req, res) => {
  try {
  
  } catch(err) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
})
```


### header response


### body parser
```
const bodypaser = require('body-parser')
app.use(bodypaser.urlencoded({extended:false}))
```

### common path
```
app.use("/admin", adminRoutes)
```

### sendfile
```
res.sendFile(path.join(__dirname, "view", "index.html"))
```
