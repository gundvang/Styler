# Styler (in development)
Add extended unit types to you inline styling.


## Requirements
Styler requires [jQuery](https://jquery.com/) (2.1.4 minimum) for its functionality to work correctly.


## Usage

`ww` = Window Width  
`wh` = Window Height  
`dw` = Document Width

##### `data-styler`
styling written in this data-tag will be converted to inline-styling according to the unit type specified.


##### `data-styler-target`
Used for styling according to a target elements width or height. (value should be the id of an existing element)


```
<div class="text" data-styler="width: 50dw;">Document Width</div>
<div class="text" data-styler="width: 50dh;">Document Height</div>

<div class="text" data-styler="width: 100ww;">Window Width</div>
<div class="text" data-styler="width: 100wh;">Window Height</div>

<div class="text" data-styler="width: 100tw;">This Width</div>
<div class="text" data-styler="width: 100th;">This Height</div>

<div class="parent" id="parent">
	<div class="text" data-styler="width: 100pw;">Parent Width</div>
	<div class="text" data-styler="width: 100ph;">Parent Height</div>
</div>

<div class="text" data-styler="width: 100ew;" data-styler-target="parent">Target Width</div>
<div class="text" data-styler="width: 100eh;" data-styler-target="parent">Target Height</div>
```

## Initialize Styler

```
Styler.init()
```