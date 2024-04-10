# 🔄 Markdown Previewer
> A web app that lets you type markup text in the editor tab and see it rendered in the preview tab.


![Desktop preview](https://github.com/SimonaPiz/Markdown-Previewer/assets/91121660/98c1be68-7e22-4f45-a0f7-0af375abbcf3)

## Links

- ➡ Solution URL: [Repo GitHub SimonaPiz/](https://github.com/SimonaPiz/Markdown-Previewer)
- ☑ Live Site URL: [markdown-previewer-simonapiz.netlify.app](https://markdown-previewer-simonapiz.netlify.app/)


## Table of contents

- [Links](#links)
- [Overview](#overview)
- [My process](#my-process)
- [Built with](#built-with)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

## Overview

### Objective 

Build an app that is functionally similar to this: [markdown-previewer.freecodecamp](https://markdown-previewer.freecodecamp.rocks/). ⬇

![image](https://github.com/SimonaPiz/Markdown-Previewer/assets/91121660/fc2a6cfd-99cb-44be-89be-18a458caec6c)


## My process

1. 🗂 Initialize the project on [GitHub](https://github.com/SimonaPiz/random-quote-machine) and use Git for log my commits and versioning my work.

2. ✏ I looked at the designs to start planning how to approach the project
  
3. ⚙ Implemented project features:

   - ### [☑issue #1](https://github.com/SimonaPiz/Markdown-Previewer/issues/1) Create Editor React component 

     Users should be able to:
       - [x] see a `textarea` element with a corresponding `id="editor"`
       - [x] enter text into the `#editor` element, then the `#preview` element is updated as I type to display the content of the textarea.
         ### [☑issue #3](https://github.com/SimonaPiz/Markdown-Previewer/issues/3) Menage status with Redux

           - [x] add new feature MarkdownConverter 
           - [x] create markdownConverter slice to menage status, actions and reducers
           - [x] create reducers:
             - [x] load default text in Editor component
             - [x] set text value in Editor on change event
             - [x] convert text in Previewer component 
           - [x] create store
           - [x] connect to the component
       
       - [x] enter GitHub flavored markdown into the `#editor` element, then the text is rendered as HTML in the `#preview` element as I type
       - [x] When the markdown previewer first loads, the default text in the `#editor` field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
          
   - ### [☑issue #2](https://github.com/SimonaPiz/Markdown-Previewer/issues/2) Create Previewer React component       

     Users should be able to:

     - [x] see an element with a corresponding `id="preview"`.
     - [x] enter text into the `#editor` element, then the `#preview` element is updated as I type to display the content of the textarea.
     - [x] When the markdown previewer first loads, the default markdown in the `#editor` field should be rendered as HTML in the `#preview` element.
     - [x] **Optional Bonus (you do not need to make this test pass):** My markdown previewer interprets carriage returns and renders them as `br` (line break) elements.

   - ### [☑issue #5](https://github.com/SimonaPiz/Markdown-Previewer/issues/5) Extra Features
     - [x] User can open editor in full screen
     - [x] User can open Previever in full screen
     - [x] Responsive adaptation
    

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- React
- Redux
- Marked library to parse markdown
- Interwave react library to safety render HTML in react component

## Author

- Website - [Simona Pizio](https://github.com/SimonaPiz)
- Codepen - [SimonaPiz/pen](https://codepen.io/SimonaPiz/pen/qBvgoxr)
- Freecodecamp - [freecodecamp/SimonaPiz](https://www.freecodecamp.org/SimonaPiz)

## Acknowledgements
This is a solution to the [Build a Markdown Previewer](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer) project to earn the [Front End Development Libraries certification](https://www.freecodecamp.org/learn/front-end-development-libraries/) by FreeCodeCamp.
