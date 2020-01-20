### Semantic HTML
<button>Click Me</button>

### Headings Are Important
h1, h2, h3...

### Alternative Text
<img src="img_chania.jpg" alt="Flowers in Chania">


### Link Titles
<a href="https://www.w3schools.com/html/" title="Go to W3Schools HTML section">Visit our HTML Tutorial</a>


Signposts/Landmarks: ARIA's role attribute values can act as landmarks that either replicate the semantics of HTML5 elements (e.g. <nav>), or go beyond HTML5 semantics to provide signposts to different functional areas, e.g search, tabgroup, tab, listbox, etc.
Dynamic content updates: Screenreaders tend to have difficulty with reporting constantly changing content; with ARIA we can use aria-live to inform screenreader users when an area of content is updated, e.g. via XMLHttpRequest, or DOM APIs.
Enhancing keyboard accessibility: There are built-in HTML elements that have native keyboard accessibility; when other elements are used along with JavaScript to simulate similar interactions, keyboard accessibility and screenreader reporting suffers as a result. Where this is unavoidable, WAI-ARIA provides a means to allow other elements to receive focus (using tabindex).
Accessibility of non-semantic controls: When a series of nested <div>s along with CSS/JavaScript is used to create a complex UI-feature, or a native control is greatly enhanced/changed via JavaScript, accessibility can suffer — screenreader users will find it difficult to work out what the feature does if there are no semantics or other clues. In these situations, ARIA can help to provide what's missing with a combination of roles like button, listbox, or tabgroup, and properties like aria-required or aria-posinset to provide further clues as to functionality.


### aria-wai
e.g.: 
<input 
  aria-invalid="true" 
  aria-describedby="error-id- help-mZuiu2mL-" 
  aria-labelledby="label-id" formnovalidate="" type="text" value="" style="resize: none;">
<p class="FieldWrapper__help" tabindex="-1" id="help-mZuiu2mL-">This is help</p>
