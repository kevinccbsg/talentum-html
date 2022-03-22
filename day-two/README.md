# Day two

## 1. Responsive design & responsive images

We saw the different layout systems, and how having different resolutions or devices has affected the software development:

- [Responsive design patterns](https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns)

We also practice how to use responsive images with `<picture>` and `srcset`. We use picture for art direction, in case we want to display different images for different resolutions.

```html
<picture>
  <!-- image 1 -->
  <source
    media="(min-width: 800px)"
    srcset="
    https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/head.jpg,
    https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/head-2x.jpg 2x
    "
  >
  <!-- image 2 -->
  <source
    media="(min-width: 450px)"
    srcset="
      https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/head-small.jpg,
      https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/head-small-2x.jpg 2x
    "
  >
  <!-- image 3 -->
  <img
    src="https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/head-fb.jpg"
    srcset="
      https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/head-fb-2x.jpg 2x
    "
    alt="a head carved out of wood"
  >
</picture>
```

When we use `srcset` we define when we want to display an image based on the pixel density of the device.

```html
<img
  src="https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/400.png" 
  sizes="(min-width: 600px) 25vw, (min-width: 500px) 50vw, 100vw"
  srcset="
    https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/100.png 100w,
    https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/200.png 200w,
    https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/400.png 400w,
    https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/800.png 800w,
    https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/1600.png 1600w,
    https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/2000.png 2000w
  "
  alt="an example image"
>
```

The class example is in this [file](https://github.com/kevinccbsg/talentum-html/blob/main/day-two/responsive-images/index.html).

**External resources**

- [Responsive images](https://developers.google.com/web/fundamentals/design-and-ux/responsive/images).

## 2. Open graph tags

We review Open Graph protocol which based on [their website](https://ogp.me/) is
```
The Open Graph protocol enables any web page to become a rich object in a social graph. For instance, this is used on Facebook to allow any web page to have the same functionality as any other object on Facebook.
```

Example of Open graph tags:

```html
<meta property="og:title" content="OG title">
<meta property="og:description" content="OG description etc etc etc">
<meta property="og:image" content="https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/head-fb-2x.jpg">
<meta property="og:image:width" content="400">
<meta property="og:image:height" content="400">
```

We remark that for assets (images/videos) it is important to use the absolute URL with the domain.

The class example is in this [file](https://github.com/kevinccbsg/talentum-html/blob/main/day-two/open-graph/index.html).

**External resources**

- [Open graph](https://ogp.me/)
- [List of useful meta tags](https://gist.github.com/lancejpollard/1978404)
- [Twitter cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup)
- [Twitter cards validator](https://cards-dev.twitter.com/validator)

## 3. CSS

We did an intro and we were able to complete the styles of our Anime's website.

We saw a lot of concepts:

**CSS variables**

We can reuse variables across our CSS file.

```css
:root {
  --main-primary-color: #4C4AE6;
  --main-font: 'Raleway', sans-serif;
}

body {
  font-family: var(--main-font);
}
```

**Selector**

```css
/* 
  we can use selectors for tags. But is not recommendable. It is too generic
*/
div {
  color : red;
}
/*
  We can use selectors with classes
  <div class="my-div">
*/
.my-div {
  font-size: 2rem;
}
/*
  We can use selectors with multiple classes
  <div class="my-div main-color">
*/
.main-color {
  background-color: blue;
}
.my-div {
  font-size: 2rem;
}
.main-color.my-div {
  padding: 20px;
}

/*
  We can use the "id" as a selector
*/
#search {
  border-radius: 5px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
/* or we can use special selector with the attributes */
.search-form input[type="button"] {
  color: var(--main-white-color);
  background-color: var(--main-primary-color);
  border: none;
  border-radius: 5px;
  padding: 10px 12px;
  cursor: pointer;
  transition: background-color 0.3s linear;
}
```

**Basic properties (color / padding / margin / font sizes)**

```css
/* <footer class="main-bg footer" /> */
.main-bg.footer {
  background-color: var(--main-primary-color);
  color: var(--main-white-color);
  text-align: center;
  /* padding / margins */
  padding-top: 30px;
  padding-bottom: 30px;
  /* shorthand */
  padding: 30px;
  font-style: italic;
}
```

**Common max-width alignment**

We use this css to align the content to the center and limit the width in case we have big screens

```css
.main-content {
  width: 90%;
  margin: 0 auto;
  max-width: 1320px;
}
```

**Hover**

```css
.search-form input[type="button"]:hover {
  background-color: #6f6de3;
}
```

**transitions**

For transitions we are going to use this syntax `transition: <css-prop> <time> <type>`.

```css
.search-form input[type="button"] {
  transition: background-color 0.3s linear;
}

.search-form input[type="button"]:hover {
  background-color: #6f6de3;
}
```

**display flex**

```css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}
```

**display grid**

```css
.shows-container .shows-items {
  font-size: 1.2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
```

**media queries**

Remember if we use `(min-width: 760px)` means we will execute extra CSS for screen with 760px and bigger.

```css
@media (min-width: 760px) {
  .show-item .img-container {
    max-height: 300px;
  }
}
```

The class example is in this [file](https://github.com/kevinccbsg/talentum-html/blob/main/day-two/web-html-css/index.html).

---

**External resources**

- [CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions).
- [Flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
- [CSS grid guide](https://css-tricks.com/snippets/css/complete-guide-grid/).
- [Google fonts](https://fonts.google.com/).
- [CSS grid garden](https://cssgridgarden.com/).
- [CSS flexbox froggy](https://flexboxfroggy.com/).
- [Reset Meyerweb](https://meyerweb.com/eric/tools/css/reset/).

