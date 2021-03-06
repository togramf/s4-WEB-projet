# s4-project

## Progression 
- [x] create components
- [x] fetch API : [Art Institute of Chicago API](http://api.artic.edu/docs/)
- [x] display fetch 
- [x] create components automatically from the number of artworks fetched (v-for)
- [x] see the problem with pictures on the API 
- [x] recup the pictures of each artwork
- [x] make the page prettier 
- [x] add a search bar
- [x] sort the data from the API : separate 'search' and 'sort'
- [x] change request ideas: change 'page'
- [x] filter by types of artwork (checkboxes)
- [x] clean and separate the code 
    - [x] clean up variable names
    - [x] searchbar
    - [x] sorting options
    - [ ] filter buttons: problem to update the Array ArtworkTypesData
    - [x] navigation buttons 
- [x] storage
    - [x] search -> local
    - [x] sort type -> local
    - [x] nb artworks -> local


## In Addition 
- [x] correct buttons to 'change page': 
    - arrows ? 
        - [Arrow idea 1](https://codepen.io/xzf/pen/BvGLjL) ;
        - [Arrow idea 2](https://codepen.io/shawnlooi/pen/eeXmrQ) ;
        - [Arrow idea 3](https://codepen.io/cbrst/pen/ebxwLJ) ;
        - [Arrow idea 4](https://codepen.io/hakimel/pen/nOzqdW) ;
    - pagination buttons 
        - [Pagination model](https://codepen.io/alligatorio/pen/zWvpRp) ;
- [x] more information about the artworks on click ? 
- [x] correct footer 

## Naming consistency

(I like to use multiple naming systems to make sure I'm using the right element, for example I name the variables I create in a function in a different way than the parameters requested as input)

HTML & CSS: `div-class`; `div_id`; `ComponentName`

Script: `functionVariableDataAndPropsName`; `parameter_and_field_name`

## Launch Project 
```
npm run serve
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
