# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size (mobile: 375px; desktop: 1440px)
- See hover and focus states for all interactive elements on the page
- **Bonus**: Toggle the mobile menu

### Screenshot

![](./assets/images/screenshot_desctop.jpg)
![](./assets/images/screenshot_mobile.jpg)

### Links

- Solution URL: [https://github.com/Glorit74/news-homepage-main](https://github.com/Glorit74/news-homepage-main)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

## What I tried to learn

I can limit the request to just the character I need by using a text URL variable (Later I noticed that, this was not necessary):

```html
<link
  href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap&text=W"
  rel="stylesheet"
/>
```

Variable font:

```css
@font-face {
  font-family: InterRegular;
  src: url(./assets/fonts/static/Inter-Regular.ttf);
}

@supports (font-variation-settings: normal) {
  @font-face {
    font-family: "Inter";
    src: url(./assets/fonts/Inter-VariableFont_slnt\wght.ttf);
    font-weight: 400 900;
  }
}
```

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Sass](https://sass-lang.com/) - For styles

### Continued development

In Firefox variable font doesn't work

### Useful resources

These helped me understand variable font usage:

- [The Future of Web Fonts looks Awesome - Variable Font Tutorial](https://www.youtube.com/watch?v=ZXx_U7SsZeg) -[Introduction to variable fonts on the web](https://web.dev/variable-fonts/)

## Author

- Frontend Mentor - [@Glorit74](https://www.frontendmentor.io/profile/Glorit74)
