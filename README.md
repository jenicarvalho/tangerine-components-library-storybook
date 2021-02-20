# Tangerine Components Library

**Visit our package here:**

[https://www.npmjs.com/package/tangerine-components-library-storybook](https://www.npmjs.com/package/tangerine-components-library-storybook)

**Visit our library here:**

[https://jenicarvalho.github.io/tangerine-components-library-storybook/](https://jenicarvalho.github.io/tangerine-components-library-storybook/)

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
