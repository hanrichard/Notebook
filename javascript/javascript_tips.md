### url 
```
const URLParameterList = URLParameter.substr(1).split('&')
```
### url deocde encode
```
  var uri = "https://w3schools.com/my test.asp?name=ståle&car=saab";
  var uri_enc = encodeURIComponent(uri);
  var uri_dec = decodeURIComponent(uri_enc);
 ```
  


### array to object
```
const array = [
  { key: "abc", data: 123 },
  { key: "xyz", data: 789 }
];

const object = array.reduce((result, item) => {
  const { key, ...objectWithoutKey } = item;
  return { ...result, [key]: objectWithoutKey };
}, {});

document.write("<pre>"+JSON.stringify(object,null,4)+"</pre>")
```

### remove key
```
    delete insureListValue[SITE_CORE_IDS.INSURED_PERSON_FIRST_NAME];

```

### get year/ month
```
export const lastThreeYear = 3;
const num = lastThreeYear + 1;
const today = new Date();
export const currrentMonth = (`0${today.getMonth() + 1}`).slice(-2);
export const currentYear = today.getFullYear();
const year = new Date().getFullYear();

export const getLastFourYearItems = () => {
    return Array.from(new Array(num), (v, i) => (year - i));
};
export const getLastThreeYearItems = () => {
    return getLastFourYearItems().slice(0, 3);
};

```

### work with date
```

  const startDate = polEffDt ? new Date(polEffDt.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1T00:00:00')) : new Date(new Date().setHours(0, 0, 0, 0));
```


### add/remove class
```
    window.addEventListener('resize', this.onEachResize);


handleMobileFooter = () => {
    const footer = document.getElementsByTagName('FOOTER');
    

    if (footer.length > 0 && isMobileOnly) {
      const footerClassList = footer[0].classList;
      if (document.activeElement.tagName === 'INPUT') {
        footerClassList.add('footer--hide');
      } else {
        footerClassList.remove('footer--hide');
      }
    }
  }
  ```
### underscore
```
!_.isEmpty(data.Items) {}
```

### currency display
```
var number = 123456.789;

// request a currency format
console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// → ￥123,457

// limit to three significant digits
console.log(number.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
// → 1,23,000

// Use the host default language with options for number formatting
var num = 30000.65;
console.log(num.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
// → "30,000.65" where English is the default language, or
// → "30.000,65" where German is the default language, or
// → "30 000,65" where French is the default language

currencyDisplay: 'code', 'symbol', 'name'
```


### currency local date
```
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(event.toLocaleDateString('de-DE', options));
```
### date string
```
const time = new Date().toISOString();
```

### destructure
```
{userInput : {email, passowrd}}
```

### formdata
```
const formData = new FormData(this.form)
```
