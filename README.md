# rapsodo-test-case

## Dev Progress And Short Explanation

1. This test case project developed with vue, vuex, vue-router and vuetify.
2. As requested there are 2 pages which store and basket.
3. As requested items can be added to basket or remove from it on both pages.
4. As requested sub total is shown on basket summary and have links between both pages on toolbar and inside basket page.
5. General Coding Progress: First i thought about general structure and how can i split the components so they can be managable and understandable easly. My biggest dilemma was item-card components working on the whole project. As far as i can understand they both worked just the same way with just same requirements. Only difference was a little style difference. As far as i make my resources about code duplication they were saying "if two functions are doing almost the same job you can write them seperately to make them more understandable" but here they were doing just the same job and i wanted to show that i can design and make work reusable shared components with props. So i made a shared item-card component and used it on both basket and products pages with some style fixes with class binding according to source props.
6. Small Extra: I added snackbars with vue-notification package.
7. Extra: As i know from my B2B or B2C experiences customer should find the last basket even if they close the site and to be able to ensure that i used local storage. Everytime i make changes on basket items i setted them on local storage and get them. I'm almost sure that there are better ways to do that but about time and since it's already extra i didn't want to spend further time about it.
8. Important info about tests!: Since i told you on the first interview i have absoulately zero experience on writing on unit tests but likewise i really want to learn, improve and write unit tests. I didn't want to try learn and write it on such close time sloppy so i didn't write any tests. I hope i can learn writing unit tests asap and improve and refill my absance on this point.
9. Thank you for your time on reviewing my project and giving me chance to make practice on different cases.

P.S: I also deployed my project on GH-Pages and you can accces it via link on about section.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
