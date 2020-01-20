### Semantic HTML
<button>Click Me</button>

### Headings Are Important
h1, h2, h3...

### Alternative Text
<img src="img_chania.jpg" alt="Flowers in Chania">


### Link Titles
<a href="https://www.w3schools.com/html/" title="Go to W3Schools HTML section">Visit our HTML Tutorial</a>


```
<header>
  <h1>...</h1>
  <nav role="navigation">
    <ul>...</ul>
    <form role="search">
      <!-- search form  -->
    </form>
  </nav>
</header>

<main>
  <article role="article">...</article>
  <aside role="complementary">...</aside>
</main>

<footer>...</footer>

```

```
<ul role="tablist">
  <li class="active" role="tab" aria-selected="true" aria-setsize="3" aria-posinset="1" tabindex="0">Tab 1</li>
  <li role="tab" aria-selected="false" aria-setsize="3" aria-posinset="2" tabindex="0">Tab 2</li>
  <li role="tab" aria-selected="false" aria-setsize="3" aria-posinset="3" tabindex="0">Tab 3</li>
</ul>
<div class="panels">
  <article class="active-panel" role="tabpanel" aria-hidden="false">
    ...
  </article>
  <article role="tabpanel" aria-hidden="true">
    ...
  </article>
  <article role="tabpanel" aria-hidden="true">
    ...
  </article>
</div>
```

### aria-wai
e.g.: 
<input 
  aria-invalid="true" 
  aria-describedby="error-id- help-mZuiu2mL-" 
  aria-labelledby="label-id" formnovalidate="" type="text" value="" style="resize: none;">
<p class="FieldWrapper__help" tabindex="-1" id="help-mZuiu2mL-">This is help</p>
