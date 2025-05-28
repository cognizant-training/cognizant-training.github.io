# cognizant-training.github.io -- Gaurab

```shell
$ git init
$ git add .
$ git commit -m "first commit"
$ git remote add origin https://github.com/cognizant-training/cognizant-training.github.io.git
$ git push -u origin main


-------------- for existing project..
$ git add .
$ git commit -m "first commit"
$ git push
```

browser ??

DOM Tree ??

DOM element

Document Object Model


Document -> Global Object in JavaScript


html,js --> Document ---> Browser Object 


console.log(document)


HTML- Structure of the page
CSS - add style or design to the page
JavaScript - Add intractivity to the page



Common HTML Tags:
<html>
<head>
<title>
<body>
<h1> --- <h6>
<p>
<a>
<img>
<ol> , <li>
<ul> , <li>
<table>, <tr>, <td>
<div>
<br>
<hr>

1. Layout and Structure

<header>
<nav>
<section>
<article>
<aside>
<footer>
<main>

2. Text Content Tags

<h1> .... <h6>
<p>
<a>
<strong>
<em>
<br>
<hr>

3. Form Elements

<form>
<input>
<label>
<textarea>
<select>
<button>

4. Multimedia Tags

<video>
<audio>
<source>
<iframe>

5. Graphics

<canvas>
<svg>

6. Container tags

<div>
<span>

7. storage tags

localStorage
sessionStorage



## HTML5 Storage API

### localStorage - DATA will persists even after the browser is closed
### sessionStorage - data will be lost on broswer/tab is closed 

## HTML5 API - Drag and Drop



## Bootstrap V5 
total width devide in 12 column grid
- CSS Classes for layout - button, forms, ...etc
- JavaScript component built-in - (modal, dropdwon menu, tootips, navigation bar)
- Fully Responsive
- Mobile First
    hide in mobile (d-none, d-md-block)

### ways of useing css 
1. Inline css
2. Internal css 
3. External css
4. using include / mixin

### Bootstrap CDN 
Navigation, Pagination , 

#### Mixin
```css
/* define a mixin*/
@mixin button { 
    color: red;
}

/* Use this mixin*/
.btn-primary {
    @include button;
    color: yellow;
}

```

mb-3 = margin top 1rem
container = fixed width layout
row = create a horizonal group
col-*= responsive column
col-sm-6, col-lg-3 =adjust layout per screen size
text-center = keep text in center
text-md-start =  left-align on medium+
mt-3 = 
p-2 = padding 0.5rem
bg-dark = 
text-white

--------------------------------
##CSS Advanced Topics:

### BOX Model 

-----------------
|               |
|    xyz        |
|               |
-----------------


### Flexbox
can create horizonally or vertically 1D layout

display:flex
flex-direction:row |column
justify-content: center
alig-item: center
gap: ---->
flex-grow, flex-shrink, flex-basic, align-self.....

### CSS Grid
best for 2D layout (row and column)

display: grid
grid-template-column: 1fr 2fr   | repeat(3, 1fr)
grid-template-rows: auto
gap: 10px

### Positioning
position: static | relative | absolute | fixed | sticky 

### Media Query 

//Phone
@media (max-width: 600px) {
    .container {
        border:1px solid red;
    }
}

/// Tablet
@media (min-width: 601px)  and (max-width:1024px){
    .container {
        border:1px solid blue;
    }
}

// desktop
@media (min-width: 1024px) {
    .container {
        border:1px solid green;
    }
}

