### header
```
x-auth-token
```


```
Content-Type
```


```
router.get('/me', auth, async (req, res) => {
  try {}
  catch(err) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
}
```
