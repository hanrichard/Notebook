const URLParameterList = URLParameter.substr(1).split('&')


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
