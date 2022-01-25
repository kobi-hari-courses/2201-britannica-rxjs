# Day 03 - Flex boxes
## Flex box Axes
* Row, Column
* Row-Reverse and Column-Reverse
* Main axis and the Cross axis
* how RTL and LTR affect flex, 
  * Start and End instead of left and right
  
## The flex container
* Display: `flex` or `inline-flex`
* Children of flex containers become `flex-items`
* Flex specific properties
  * Container properties: `flex-direction`, `flex-wrap`, `justify-content`, `align-items`
  * Child properties: `flex-grow`, `flex-shrink`, `align-self`, `order`
* The `flex-direction` property defines the main and cross axes.

## Flex Wrapping
* Controlled by the `flex-wrap` property
* Each "line" should be considered a flex container of its own
* The `flex-flow` group property
* Wrapping in each direction
* The `wrap-reverse` value.
  * is `row-reverse wrap` the same as `row wrap-reverse`? 
  * Why do we need both?

## Flex sizing: The grow, shrink and basis
* Properties `flex-grow`, `flex-shrink` and `flex-basis` are applied to flex items
* `flex-grow`: How much of the positive free space this item gets
* `flex-shrink`: How much of the negative free space can be removed from this item
* `flex-basis`: What is the size of the item befoe growing and shrinking happens
* What is the difference between `flex-basis` and `size`
* Understanding the `flex-basis` calculation before space distribution is done
* Extra space distribution using `flex-grow`
* Missing space distribution using `flex-shrink`
  
## Flex Alignment
* The `justify-content` property
* The `align-items` property
* The `align-self` property
* The `align-content` property (for wrapping)

## Other item properties
* The `order` property


## Examples
* Perfect Centering
  * using `justify-content` and `align-items`
  * using `margin: auto`
* 

## Extra links
* [Complete Guide to Flexbox on CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Flex Froggy Game](https://flexboxfroggy.com/)
* [Flexbox guide on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
* [Flex wrapping in details](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
* [Flex Grow, Shrink and Basis in details](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)