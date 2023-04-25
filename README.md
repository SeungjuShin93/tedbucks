# **☕ TEDBUCKS**

I created this website for my portfolio, referring to the Starbucks website.

[https://seungjushin93.github.io/tedbucks/](https://seungjushin93.github.io/tedbucks/)

![image](https://user-images.githubusercontent.com/76985204/234204871-fc47a9c9-7189-4af8-a4b9-a70ae43e36fa.png)

## The Open Graph protocol

[View more Open Graph properties](https://ogp.me/)

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Tedbucks" />
<meta property="og:title" content="Tedbucks Coffee" />
<meta property="og:description" content="It is a cloning project for Starbucks homepage to create a portfolio." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://seungjushin93.github.io/tedbucks/" />
```

- `og:type`: The type of the page
- `og:site_name`: The name of the site that the page belongs to
- `og:title`: The name (title) of the page
- `og:description`: A brief description of the page
- `og:image`: The URL of the representative image of the page
- `og:url`: The URL of the page

---

## Twitter Cards

This specifies the information that is used first when a webpage is shared on social media (such as Twitter).

[See more Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)

```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Tedbucks" />
<meta property="twitter:title" content="Tedbucks Coffee" />
<meta property="twitter:description" content="It is a cloning project for Starbuck homepage to create a portfolio." />
<meta property="twitter:image" content="./images/starbucks_seo.jpg" />
<meta property="twitter:url" content="https://seungjushin93.github.io/tedbucks/" />
```

- `twitter:card`: the type of the card
- `twitter:site`: the name of the site
- `twitter:title`: the name of the page
- `twitter:description`: a brief description of the page
- `twitter:image`: the URL of the page's representative image
- `twitter:url`: the URL of the page

---

## Favicon

The favicon is the icon that represents a webpage, and is often the webpage's logo. To use the default `favicon.ico` file, simply place the file in the root directory of the webpage. To use a `favicon.png` file, use the following code:

> The favicon image must be in the root directory!

```html
<link rel="icon" href="./favicon.png" />
```

- `favicon.ico`: 64 x 64 (px) or 32 x 32 or 16 x 16
- `favicon.png`: 500 x 500 (px)

---

## Reset.css

Resets the default styles of each browser.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

---

## Google Fonts

Specifies the 'Nanum Gothic' font to be used on the page.

> Be sure to check the font license!

[Google Fonts](https://fonts.google.com/) provides font files for use on webpages.

```html
<link rel="preconnect" href="<https://fonts.gstatic.com>" />
<link href="<https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap>" rel="stylesheet" />
```

Applies the font to the page (inherited in CSS).

```css
body { font-family: 'Nanum Gothic', sans-serif; }
```

---

## Google Material Icons

[Google Material Icons](https://material.io/resources/icons/?style=baseline) are a set of icons provided by Google that can be used for free.

[Getting started for web](https://material.io/develop/web/getting-started)

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

To use an icon:

```css
<div class="material-icons">upload</div>
```

---

## GSAP & ScrollToPlugin

[GSAP (The GreenSock Animation Platform)](https://greensock.com/gsap/) is a timeline-based animation library that is controlled via JavaScript. [ScrollToPlugin](https://greensock.com/scrolltoplugin/) is a GSAP plugin that supports scroll animation.

> You can use it even if you don't have much knowledge of JavaScript!

```html
<script src="<https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js>" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>
<script src="<https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js>" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous"></script>
```

[Usage of .to()](https://greensock.com/docs/v3/GSAP/gsap.to/), [GSAP Easing](https://greensock.com/docs/v2/Easing)

```jsx
gsap.to(element, duration, options); // or TweenMax.to(element, duration, options)
gsap.to(window, 0.7, { scrollTo: 0 });
```

---

## Swiper

[Swiper](https://swiperjs.com/) is a modern slide library that features hardware-accelerated transitions and multiple basic behaviors.

[Getting Started With Swiper](https://swiperjs.com/get-started)

```html
<!-- in HEAD -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
```

```html
<!-- in BODY -->
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>
</div>
```

Check out the [Swiper API](https://swiperjs.com/swiper-api)(options)!

```jsx
new Swiper(element, options);
new Swiper('.swiper', {
	direction: 'vertical', // vertical slide
	autoplay: true, // automatic playback
	loop: true }); // loop playback
```

---

## Youtube API

You can control YouTube videos through the [IFrame Player API](https://developers.google.com/youtube/iframe_api_reference?hl=ko).

Specify (create) an element where the YouTube video will be displayed.

```html
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```

The function name `onYouTubePlayerAPIReady` is the name used by the Youtube IFrame Player API, so it won't work if you name it differently! Also, the function must be registered globally (Global)!

See more options in [Player parameters (playerVars)](https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters).

```jsx
// Load the Youtube IFrame API asynchronously.
var tag = document.createElement('script');
tag.src ='[https://www.youtube.com/iframe_api](https://www.youtube.com/iframe_api)';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() { // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // YouTube video ID to play
    playerVars: {
      autoplay: true, // automatic playback or not
      loop: true, // loop playback or not
      playlist: 'An6LvWQuj_8', // list of YouTube video IDs to loop
    },
    events: { // When the video is ready,
      onReady: function (event) {
        event.target.mute(); // mute!
      },},});}
```

---

## ScrollMagic

[ScrollMagic](https://github.com/janpaepke/ScrollMagic) is a JavaScript library for scrolling and interacting with elements. It is commonly used to determine whether an element is currently visible on the screen.

[ScrollMagic API](http://scrollmagic.io/docs/)

```html
<script src="<https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js>"></script>
```

```jsx
new ScrollMagic.Scene({ // Add a scene to monitor
  triggerElement: spyEl, // Specify the element to monitor for visibility
  triggerHook: 0.8, }) // Monitor visibility when 80% of the screen is visible
  .setClassToggle(spyEl, 'show') // Add the show class when the element is visible
  .addTo(new ScrollMagic.Controller()); // Assign the scene to the controller (required!)
```

---

## Lodash

[Lodash](https://lodash.com/) is a JavaScript library that provides various utility functions.

[Lodash API](https://lodash.com/docs/4.17.15), [Lodash throttle](https://lodash.com/docs/4.17.15#throttle)

```html
<script src="<https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js>" integrity="sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww==" crossorigin="anonymous"></script>
```

---

## Function to Generate Random Numbers

```jsx
// Range random function (up to 2 decimal places)
function random(min, max) {
  // Convert the string data returned by .toFixed()
  // to a number data with decimal points using parseFloat().
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));}
```
