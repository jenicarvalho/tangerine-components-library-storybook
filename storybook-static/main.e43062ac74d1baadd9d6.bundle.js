(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1098:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(56),_clientLogger=__webpack_require__(36),_configFilename=__webpack_require__(1099);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1099:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"decorators",(function(){return decorators})),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));__webpack_require__(0);var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(331),_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1113),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(125),theme=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.a)({typography:{button:{fontSize:14,fontWeight:400,textTransform:"normal",fontFamily:'"Circular",sans-serif'}},palette:{primary:{light:"#c2dbfe",main:"#1273f8",dark:"#0557d5"},secondary:{main:"#fff"}},shadows:"none"}),decorators=[function(Story){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__.a,{theme:theme,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})}],parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1101:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(373).configure)([__webpack_require__(1102),__webpack_require__(1103)],module,!1)}).call(this,__webpack_require__(111)(module))},1102:function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":1108};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1102},1103:function(module,exports,__webpack_require__){var map={"./stories/components/Button/Button.stories.tsx":1110};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1103},1108:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var esm=__webpack_require__(9),blocks=__webpack_require__(226),code_brackets=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg",colors=__webpack_require__.p+"static/media/colors.a4bd0486.svg",comments=__webpack_require__.p+"static/media/comments.a3859089.svg",direction=__webpack_require__.p+"static/media/direction.b770f9af.svg",flow=__webpack_require__.p+"static/media/flow.edad2ac1.svg",assets_plugin=__webpack_require__.p+"static/media/plugin.d494b228.svg",repo=__webpack_require__.p+"static/media/repo.6d496322.svg",stackalt=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg";function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(esm.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.mdx)(blocks.Meta,{title:"Tangerine components",mdxType:"Meta"}),Object(esm.mdx)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(esm.mdx)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),Object(esm.mdx)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(esm.mdx)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(esm.mdx)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(esm.mdx)("inlineCode",{parentName:"p"},"src/stories")," directory to learn how they work.\nWe recommend building UIs with a ",Object(esm.mdx)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},Object(esm.mdx)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(esm.mdx)("div",{className:"subheading"},"Configure"),Object(esm.mdx)("div",{className:"link-list"},Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},Object(esm.mdx)("img",{src:assets_plugin,alt:"plugin"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},Object(esm.mdx)("img",{src:stackalt,alt:"Build"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},Object(esm.mdx)("img",{src:colors,alt:"colors"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},Object(esm.mdx)("img",{src:flow,alt:"flow"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(esm.mdx)("div",{className:"subheading"},"Learn"),Object(esm.mdx)("div",{className:"link-list"},Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(esm.mdx)("img",{src:repo,alt:"repo"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(esm.mdx)("a",{className:"link-item",href:"https://www.learnstorybook.com",target:"_blank"},Object(esm.mdx)("img",{src:direction,alt:"direction"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(esm.mdx)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(esm.mdx)("img",{src:code_brackets,alt:"code"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"GitHub project"),"View the source and add issues")),Object(esm.mdx)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},Object(esm.mdx)("img",{src:comments,alt:"comments"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(esm.mdx)("div",{className:"tip-wrapper"},Object(esm.mdx)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",Object(esm.mdx)("code",null,"src/stories/Introduction.stories.mdx")))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Tangerine components",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(esm.mdx)(blocks.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.mdx)(MDXContent,null))};__webpack_exports__.default=componentMeta},1110:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));var _templateObject,objectSpread2=__webpack_require__(94),taggedTemplateLiteral=(__webpack_require__(0),__webpack_require__(490)),styled_components_browser_esm=__webpack_require__(491),Button_Button=__webpack_require__(1134),ButtonStyled=Object(styled_components_browser_esm.a)(Button_Button.a)(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n  height: 32px;\n  border-radius: 4px;\n  padding: 0 20px;\n  transition: all .2s var(--ease);\n\n  &.MuiButton-containedSecondary {\n    border: 1px solid #d9d9d9;\n    color: #1273f8;\n\n    &:hover {\n      border-color: #1273f8;\n      background-color: #e7f1ff;\n    }\n  }\n"])));try{ButtonStyled.displayName="ButtonStyled",ButtonStyled.__docgenInfo={description:"",displayName:"ButtonStyled",props:{tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"string | number"}},color:{defaultValue:null,description:"The color of the component. It supports those theme colors that make sense for this component.",name:"color",required:!1,type:{name:'"inherit" | "primary" | "secondary" | "default"'}},children:{defaultValue:null,description:"The content of the button.\nThe content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},disabled:{defaultValue:null,description:"If `true`, the button will be disabled.\nIf `true`, the base button will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disableElevation:{defaultValue:null,description:"If `true`, no elevation is used.",name:"disableElevation",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},disableFocusRipple:{defaultValue:null,description:"If `true`, the  keyboard focus ripple will be disabled.",name:"disableFocusRipple",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"The size of the button.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},variant:{defaultValue:null,description:"The variant to use.",name:"variant",required:!1,type:{name:'"text" | "outlined" | "contained"'}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"((instance: ButtonBaseActions | null) => void) | RefObject<ButtonBaseActions> | null"}},buttonRef:{defaultValue:null,description:"@ignore Use that prop to pass a ref to the native button component.\n@deprecated Use `ref` instead.",name:"buttonRef",required:!1,type:{name:"((instance: unknown) => void) | RefObject<unknown> | null"}},centerRipple:{defaultValue:null,description:"If `true`, the ripples will be centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:null,description:"If `true`, the ripple effect will be disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `focusVisibleClassName`.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:null,description:"If `true`, the touch ripple effect will be disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:null,description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:"This prop can help a person know which element has the keyboard focus.\nThe class name will be applied when the element gain the focus through a keyboard interaction.\nIt's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).\nThe rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).\nA [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components\nif needed.",name:"focusVisibleClassName",required:!1,type:{name:"string"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"((event: FocusEvent<any>) => void)"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/Button/styles.tsx#ButtonStyled"]={docgenInfo:ButtonStyled.__docgenInfo,name:"ButtonStyled",path:"src/stories/components/Button/styles.tsx#ButtonStyled"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__(125),Button_Button_Button=function Button(props){return Object(jsx_runtime.jsx)(ButtonStyled,Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{variant:"contained",children:props.children}))};try{Button_Button_Button.displayName="Button",Button_Button_Button.__docgenInfo={description:"",displayName:"Button",props:{children:{defaultValue:null,description:"The content of the button.\nThe content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:null,description:"The color of the component. It supports those theme colors that make sense for this component.",name:"color",required:!1,type:{name:'"inherit" | "primary" | "secondary" | "default"'}},disabled:{defaultValue:null,description:"If `true`, the button will be disabled.\nIf `true`, the base button will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disableElevation:{defaultValue:null,description:"If `true`, no elevation is used.",name:"disableElevation",required:!1,type:{name:"boolean"}},disableFocusRipple:{defaultValue:null,description:"If `true`, the  keyboard focus ripple will be disabled.",name:"disableFocusRipple",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:null,description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"The size of the button.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"The variant to use.",name:"variant",required:!1,type:{name:'"text" | "outlined" | "contained"'}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"((instance: ButtonBaseActions | null) => void) | RefObject<ButtonBaseActions> | null"}},buttonRef:{defaultValue:null,description:"@ignore Use that prop to pass a ref to the native button component.\n@deprecated Use `ref` instead.",name:"buttonRef",required:!1,type:{name:"((instance: unknown) => void) | RefObject<unknown> | null"}},centerRipple:{defaultValue:null,description:"If `true`, the ripples will be centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:null,description:"If `true`, the ripple effect will be disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `focusVisibleClassName`.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:null,description:"If `true`, the touch ripple effect will be disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:null,description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:"This prop can help a person know which element has the keyboard focus.\nThe class name will be applied when the element gain the focus through a keyboard interaction.\nIt's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).\nThe rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).\nA [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components\nif needed.",name:"focusVisibleClassName",required:!1,type:{name:"string"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"((event: FocusEvent<any>) => void)"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/Button/Button.tsx#Button"]={docgenInfo:Button_Button_Button.__docgenInfo,name:"Button",path:"src/stories/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Example/Button",component:Button_Button_Button};var Button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Button_Button_Button,Object(objectSpread2.a)({},args))},Primary=Button_stories_Template.bind({});Primary.args={color:"primary",children:"Button"};var Secondary=Button_stories_Template.bind({});Secondary.args={color:"secondary",children:"Button"};var Large=Button_stories_Template.bind({});Large.args={color:"primary",size:"large",children:"Button"};var Small=Button_stories_Template.bind({});Small.args={color:"primary",size:"small",children:"Button",disabled:!0},Primary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Secondary.parameters),Large.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Large.parameters),Small.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Small.parameters)},496:function(module,exports,__webpack_require__){__webpack_require__(497),__webpack_require__(661),__webpack_require__(662),__webpack_require__(820),__webpack_require__(1039),__webpack_require__(1072),__webpack_require__(1077),__webpack_require__(1089),__webpack_require__(1091),__webpack_require__(1096),__webpack_require__(1098),module.exports=__webpack_require__(1101)},570:function(module,exports){},662:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(373)}},[[496,1,2]]]);
//# sourceMappingURL=main.e43062ac74d1baadd9d6.bundle.js.map