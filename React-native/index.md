```
flatlist

numColumns 
```

```
listeners = {{
  tabPress: e => {
    e.preventDefault()
  }
}}

```

```
<Text numberoflines='3'>123</Text>
```

```
default navigationOptions
screenProps
```

```
useRoute
useNavigation
```

```
import { BackHandler } from 'react-native';

function handleBackButtonClick() {
  navigation.goBack();
  return true;
}

useEffect(() => {
  BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
  return () => {
    BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
  };
}, []);
```
