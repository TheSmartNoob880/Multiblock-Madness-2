onEvent('recipes', event => {
    event.recipes.multiblocked.multiblock('source_liquifier')
    .inputANSource(1000)
    .outputFluid(Fluid.of('kubejs:liquid_source', 1000))
    .duration(50)
})