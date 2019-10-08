progress,
progress[value]
{
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-size: auto auto;
    width: 500px;
    height: 10px;
    border: none;
    border-radius: 10px;
}

progress::-ms-fill {
    border: none;
    border-radius: 10px;
}

progress::-webkit-progress-value,
progress::-moz-progress-bar,
{
    background-color: black;
    border-radius: 10px;
}

progress[value]::-webkit-progress-bar
{
  background-color: #eee;
    border-radius: 10px;
}
progress:hover, img:hover
{
    opacity: 0.7;
    border-radius: 10px;
}

progress[value^="0"]::-webkit-progress-value,
progress[value^="1"]::-webkit-progress-value,
progress[value^="2"]::-webkit-progress-value
{
   background-color: red;
    border-radius: 10px;
}
progress[value^="0"]::-moz-progress-bar,
progress[value^="1"]::-moz-progress-bar,
progress[value^="2"]::-moz-progress-bar
{
   background-color: red;
    border-radius: 10px;
}
progress[value^="0"]::-ms-fill,
progress[value^="1"]::-ms-fill,
progress[value^="2"]::-ms-fill
{
   color: red;
    border-radius: 10px;
}

progress[value^="3"]::-webkit-progress-value,
progress[value^="4"]::-webkit-progress-value,
progress[value^="5"]::-webkit-progress-value
{
     background-color: yellow;
    border-radius: 10px;
}
progress[value^="3"]::-moz-progress-bar,
progress[value^="4"]::-moz-progress-bar,
progress[value^="5"]::-moz-progress-bar
{
     background-color: yellow;
    border-radius: 10px;
}
progress[value^="3"],
progress[value^="4"],
progress[value^="5"]
{
   color: yellow;
    border-radius: 10px;
}

progress[value^="6"]::-webkit-progress-value,
progress[value^="7"]::-webkit-progress-value,
progress[value^="8"]::-webkit-progress-value,
progress[value^="9"]::-webkit-progress-value
{
    background-color: green;
    border-radius: 10px;
}
progress[value^="6"]::-moz-progress-bar,
progress[value^="7"]::-moz-progress-bar,
progress[value^="8"]::-moz-progress-bar,
progress[value^="9"]::-moz-progress-bar
{
    background-color: green;
    border-radius: 10px;
}
progress[value^="6"],
progress[value^="7"],
progress[value^="8"],
progress[value^="9"]
{
   color: green;
    border-radius: 10px;
}

progress[value="100"]::-webkit-progress-value
{
    background-color: #00ff00;
    border-radius: 10px;
}
progress[value="100"]::-moz-progress-bar
{
    background-color: #00ff00;
    border-radius: 10px;
}
progress[value="100"]::-ms-fill
{
    border-radius: 10px;
    background-color: #00ff00;
}

progress[value^="110"]::-moz-progress-bar,
progress[value^="110"]::-ms-fill
{
    background-color:white!important;
    border-radius: 10px;
}
