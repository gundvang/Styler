# StylerJS (in development)
StylerJS makes it possible to add extended unit types to your inline styling.


## Units

`ew` = Element Width  
`eh` = Element Height  
`pw` = Parent Width  
`ph` = Parent Height  
`tw` = Target Element Width  
`th` = Target Element Height  
`ww` = Window Width  
`wh` = Window Height  
`dw` = Document Width  
`dh` = Document Height


### Data tags

##### `data-styler`
styling written in this data-tag will be converted to inline-styling according to the unit type specified.


##### `data-styler-target`
Used for styling according to a target elements width or height. (value should be the id of an existing element)


```
<div class="text" data-styler="width: 100ew;">Element Width</div>
<div class="text" data-styler="width: 100eh;">Element Height</div>
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
```
<div class="text" data-styler="width: 100ww;">Window Width</div>
<div class="text" data-styler="width: 100wh;">Window Height</div>
```
```
<div class="text" data-styler="width: 100dw;">Document Width</div>
<div class="text" data-styler="width: 100dh;">Document Height</div>
```

## Initialize StylerJS

```
styler.init();
```