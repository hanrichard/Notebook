url: https://codepen.io/hxy314/pen/YzXWXYw?editors=0111

### js
```
const images = [
  "https://via.placeholder.com/200.png?text=1",
  "https://via.placeholder.com/200.png?text=2",
  "https://via.placeholder.com/200.png?text=3",
  "https://via.placeholder.com/200.png?text=4",
  "https://via.placeholder.com/200.png?text=5"
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 1
    };
  }

  render() {
    const num = images.length;
    const firstOne = images.slice(0, 1);
    const lastOne = images.slice(num - 1, num);
    const newImages = lastOne.concat(images).concat(firstOne);

    const width = 200;
    const limitshow = 3;
    const position = () => {
      return (this.state.currentIndex-1) * width;
    };

    const handItemClick = index => {
      if (index === 0) {
        this.setState({
          currentIndex: num
        });
      } else if (index === num + 1) {
        this.setState({
          currentIndex: 1
        });
      } else {
        this.setState({
          currentIndex: index
        });
      }
    };
    const handClickLeft = () => {
      if (this.state.currentIndex > 1) {
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex - 1
        }));
      } else {
        this.setState({ currentIndex: num });
      }
    };

    const handClickRight = () => {
      if (this.state.currentIndex === num ) {
        this.setState({ currentIndex: 1 });
      } else {
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1
        }));
      }
    };

    const list = newImages.map((item, index) => {
      return (
        <li
          className={`listitem ${
            index === this.state.currentIndex ? "current" : ""
          }`}
          onClick={() => handItemClick(index)}
        >
          <img src={item} id={index} />
        </li>
      );
    });

    return (
      <div>
        {this.state.currentIndex} {position()} {num}
        <div className="listWrapper">
          <button className="buttonleft button" onClick={handClickLeft}>
            left
          </button>
          <ul className="list" style={{ marginLeft: `${-position()}px` }}>
            {list}
          </ul>
          <button className="buttonright button" onClick={handClickRight}>
            right
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

```

### html
```
<div id="root"></div>
```

### css
```
* {
  box-sizing: border-box; 
}

.list {
  margin: 0;
  list-style: none;
  display: inline-flex;
  padding: 0;
  transition: all 0.5s;
  align-items: center;
}

.listWrapper {
  width: 600px;
  overflow: hidden;
  position: relative;
}

.listitem {
  // max-width: 200px;
  width: 100%;
  border: 1px solid yellow;
  display: block;
  width: 200px;
  cursor: pointer;
  
  img {
   width: 100%;
   display: block;
  }

    z-index: 0;
    &.current {
      z-index: 1;
      border: 5px solid black
    
  }
}
.button {
  position : absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  
  &.buttonleft {
    left: 0;
  }
  &.buttonright {
    right: 0;
  }
}

button {
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
}
```



