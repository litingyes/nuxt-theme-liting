#  Text Editor

## Precautions

- all documents in this topic are edited according to the most basic **MarkDown** grammar, of course, there will be a simple **MDC** grammar extension

## MarkDown Basic Grammar

### Title

mark the title with __#__

```md
# Level 1 Heading
## Level 2 Heading
### Level 3 Heading
#### Level 4 Heading
##### Level 5 Heading
###### Level 6 Heading
```

### Italics

mark the italics with **\*** or **\_**

```md
*Italics*
_Italics_
```

### Bold

mark the bold text with **\*** or **\_**

```md
**Bold Text**
__Bold Text__
```

### Quote

mark quote with **>**

```md
> Quote
>> Nested Quote
```

### Code Block

mark code block with **```**

the abbreviation of the programming language can be added after **```** on the first line, and highlighting can be supported in some scenarios

```md
_```js
  console.log('Hello, nuxt-theme-liting')
_```
```

### Unordered List
 
mark unordered list with **\*** 、 **\_** or **\+**

```md
* one two three
* four five six

- one two three
- four five six
```

### Ordered List

mark ordered list with number plus **.**

```md
1. one two three
2. four five six
```

### Dividing Line

mark dividing line with **\*** 、**\-** 或 **\_**

```md
***
---
___
```

### Link

mark link with **[ ]** and **( )**

```md
[Nuxt-Theme-Liting](https://nuxt-theme.liting.ink)
```

### Image

mark image with **!** plus **[ ]** and **( )**

```md
[!头像](/avatar.jpg)
```

### Mark

mark with **`**

```md
`mark`
```

### Escape

When you want to use special characters in MarkDown, such as **\***, you can use **\\** to escape

```md
\#
```

## MarkDown Advanced Grammar

### Table

use **|** to separate cells, use **-** to separate table headers from other lines, and use **:** to set content alignment

```md
|  Header   | Header  |
|  ----  | ----  |
| Cell  | Cell |
| Cell  | Cell |

| Align Left | Right Align | Center Align |
| :-----| ----: | :----: |
| Cell | Cell | Cell |
| Cell | Cell | Cell |
```

## MDC Grammar

**MDC** syntax extends the support of MarkDown files to [Vue.js](https://cn.vuejs.org/) components

### Use Sfc

mark sfc with **::**

as follows: the component **HelloLayout** is imported, and the text `Hello, Nuxt Theme Liting` is passed to the default slot of the component

```md
::HelloLayout
Hello, Nuxt Theme Liting
::
```

In particular, components can be nested using

```md
::App
  ::HelloLayout
    Hello, Nuxt Theme Liting
  ::
::
```

### Inline SFC

when there is no need to pass values to the component, **:** can be used to describe the inline single-file component

```md
:HelloLayout
```

### Sfc Pass Props

Both of the above two component introduction methods support the incoming component **Props**

```md
::HelloLayout{type="info"}
::

::HelloLayout
---
type: info
---
::
```

### Element Attribute Expansion

use **{ }** to wrap the class name, and use **[]** to wrap the corresponding text to add a class name style to the text

```md
[Nuxt Theme Liting]{.bg-primary-400}
```
