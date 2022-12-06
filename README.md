# Frontend Mentor - Clock app solution

This is a solution to the [Clock app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- View the current time and location information based on their IP address
- View additional information about the date and time in the expanded state
- Be shown the correct greeting and background image based on the time of day they're visiting the site
- Generate random programming quotes by clicking the refresh icon near the quote

<br>

---

<br>

## Screenshot

![Desktop](./public/images/desktop.png)
<br>
<img src="./public/images/tablet.png" width="768" alt="tablet image"/>
<br>
<img src="./public/images/mobile.png" width="375" alt="mobile image"/>

<br>

---

<br>

## Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/react-stylecomponents-vite-mobile-first-SkCB8djzc)

- Live Site URL: [Add live site URL here](https://clock-app-liard.vercel.app/)

<br>

---

<br>

## My process

I built this app with Nextjs for many of its build in features such as Next Image and static site generation SSG.

To load fetched data, I used Stale-While-Revalidate (SWR) library to simplify data fetching logic with just one line of code and easily handled errors and preloading.
<br>

```js
const { data, error } = useSWR(END_POINTS.timezone, fetcher, {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  refreshInterval: 0,
});

if (error) return <Wrapper>Error loading data</Wrapper>;
if (!data) return <Wrapper>Loading....</Wrapper>;
```

<br>

Loading the background image was done with the Nextjs Image component. The component automatically handles image optimization for the correct viewport and a built-in placeholder that displays a blurred version of the image loading while the full resolution image successfully loads.

I coded All animations with CSS. For users with reduced motion settings active, all animations are disabled.

<br>

```css
 @media (prefers-reduced-motion: no-preference) {
    transition: transform ${ANIMATION_TIME.medium} ease-in-out,
      padding-block-end ${ANIMATION_TIME.medium} ease-in-out;
  }
```

<br>

The app has two themes, one for the day and one for the night. The correct theme is loaded based on the time of day. I used the Suncalc library to give me the price time when it is sunrise and sunset based on the coordinates of the user's location.

<br>

```js
export const isSunSet = (data) => {
  if (!data) return;
  const hour = new Date().getHours();
  const times = SunCalc.getTimes(new Date(), data.latitude, data.longitude);
  const sunrise = times.sunrise.getHours();
  const sunset = times.sunset.getHours();
  return hour >= sunrise && hour < sunset ? false : true;
};
```

<br>

To display the "time of day" greeting, I used the Date() API to get the local time and say the correct greeting based on the time of day.

```js
export const getTimeOfDayGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 1 && hour < 12) return "Morning";
  if (hour >= 12 && hour <= 18) return "Afternoon";
  if (hour > 18 && hour < 24) return "Evening";
  return "day";
};
```

<br>

To code the 24-hour clock, I also leverage the Date() API, and it's toLocaleTimeString() method.

```js
export const getCurrentTime = () => {
  const date = new Date();
  return date.toLocaleTimeString([], {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
};
```

<br>

---

<br>

## Built with

- Mobile-first workflow
- [NextJS](https://nextjs.org/) - React Framework
- [SWR](https://swr.vercel.app/) - React Hooks for Data Fetching
- [Styled Components](https://styled-components.com/) - For styles
- [Suncalc](https://github.com/mourner/suncalc) - for calculating sun position, sunlight phases (times for sunrise, sunset, dusk, etc.), moon position and lunar phase for the given location and time.

## Author

- Website - [www.sergioswork.com](https://www.sergioswork.com)
- Frontend Mentor - [@sergioreynoso](https://www.frontendmentor.io/profile/sergioreynoso)
- LinkedIn - [@sreynoso](https://www.linkedin.com/in/sreynoso/)
