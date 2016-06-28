# Styler (in development)
Add extended unit types to you inline styling.


## Requirements
Styler requires [jQuery](https://jquery.com/) (2.1.4 minimum) for its functionality to work correctly.


## Units

`ww` = Window Width  
`wh` = Window Height  
`dw` = Document Width  
`dh` = Document Height  
`ew` = Element Width  
`eh` = Element Height  
`pw` = Parent Width  
`ph` = Parent Height  
`tw` = Target Element Width  
`th` = Target Element Height


### Data tags

##### `data-styler`
styling written in this data-tag will be converted to inline-styling according to the unit type specified.


##### `data-styler-target`
Used for styling according to a target elements width or height. (value should be the id of an existing element)


```
<div class="text" data-styler="width: 100dw;">Document Width</div>
<div class="text" data-styler="width: 100dh;">Document Height</div>
```
```
<div class="text" data-styler="width: 100ww;">Window Width</div>
<div class="text" data-styler="width: 100wh;">Window Height</div>
```
```
<div class="text" data-styler="width: 100tw;">This Width</div>
<div class="text" data-styler="width: 100th;">This Height</div>
```
```
<div class="parent" id="target">
	<div class="text" data-styler="width: 100pw;">Parent Width</div>
	<div class="text" data-styler="width: 100ph;">Parent Height</div>
</div>
```
```
<div class="text" data-styler="width: 100tw;" data-styler-target="target">Target Width</div>
<div class="text" data-styler="width: 100th;" data-styler-target="target">Target Height</div>
```

## Initialize Styler

```
Styler.init();
```