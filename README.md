# Tangerine Components Library

**Visit our package here:**

[https://github.com/jenicarvalho/tangerine-components-library-storybook/packages/634047](https://github.com/jenicarvalho/tangerine-components-library-storybook/packages/634047)

To use this package, add a file named .npmrc on your project's root, with the next content:

```registry=https://npm.pkg.github.com/jenicarvalho```

Then execute 
```npm install @jenicarvalho/tangerine-components-library-storybook@0.1.21```

**Visit our library here:**

[https://jenicarvalho.github.io/tangerine-components-library-storybook/](https://jenicarvalho.github.io/tangerine-components-library-storybook/)

---- 
## To publish library updates

- Update version in package.json ("version": "0.1.xx")
- git commit and git push the changes
- create a new tag
- push the tag

### To create and publish a tag
```
  git tag -a v0.1.xx -m "your changes message"
  git push --tags
```

## To run this repository
```bash
  git clone
  yarn install
  yarn storybook
```
## To install
```bash
  yarn add tangerine-components-library-storybook
```

## To use
Follow steps described on [https://docs.google.com/document/d/1bZe-g0FmxtVrDJYdb25FFrEGBS4Gg73pOK31g8FBcRQ/edit?usp=sharing](https://docs.google.com/document/d/1bZe-g0FmxtVrDJYdb25FFrEGBS4Gg73pOK31g8FBcRQ/edit?usp=sharing)
```js
  import { Button } from 'tangerine-components-library-storybook'

  <Button color="primary">My Button</Button>
```
---- 

## We use Material UI as our framework
Do **not** override the styles. Change it using the theme provided. Go to:
``` .storybook > preview.js > theme ```  
and change the theme as you need.

**To know more about what you can change: [visit the docs.](https://material-ui.com/customization/theming/)**

----

### If you need to override something that is not possible using theme, use its classes. *(see the Button component)*
To know the classes you can visit the components API from material. 

[An example here.](https://material-ui.com/api/button/#css)

---- 
## How to create a component

Go to: 

``` src >  stories > components``` and start to write yours.

Each component needs a *stories.tsx* file in order to render it on the storybook.

See the components created so far on *components* folder.
