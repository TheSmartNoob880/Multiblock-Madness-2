onEvent('recipes', event => {
	
  // Damascus Steel
  event.recipes.createCutting('kubejs:steel_scraps', ['#forge:ingots/steel']).processingTime(400).id(`mbm2:cutting/steel_scraps`)

  //Swap scraps for stacked iron/steel plating
  event.recipes.createSequencedAssembly([ // start the recipe
  'kubejs:damascus_steel_ingot', // have this item be an output
  ], 'kubejs:steel_scraps', [ // input.
  event.recipes.createFilling('kubejs:partially_folded_damascus_steel', ['kubejs:partially_folded_damascus_steel', Fluid.of('lava', 50)]),
  event.recipes.createPressing('kubejs:partially_folded_damascus_steel', ['kubejs:partially_folded_damascus_steel']),
  event.recipes.createCutting('kubejs:partially_folded_damascus_steel', ['kubejs:partially_folded_damascus_steel']).processingTime(50),
//  event.recipes.createCutting('kubejs:partially_folded_damascus_steel', 'kubejs:partially_folded_damascus_steel').processingTime(50)
  ]).transitionalItem('kubejs:partially_folded_damascus_steel').loops(20).id(`mbm2:damascus_steel_ingot`)


  //Signalum
  event.recipes.multiblocked.multiblock('mixer')
  .inputItems('3x #forge:dusts/dielectric_alloy','2x #forge:dusts/energetic_alloy') //,'#forge:fine_dusts/rune'
  .inputFluid(Fluid.of('pneumaticcraft:memory_essence', 1000))
  .outputItem(Item.of('4x #forge:dusts/signalum'))
  .setPerTick(true)
  .inputFE(2048)
  .duration(300)

// Industrial_alloy_ingot
event.shaped('4x kubejs:industrial_alloy_ingot', [
	'AIQ',
	'IBI',
	'QIA'
  ], {
	B: 'immersiveengineering:herbicide_bucket',
	A: 'thermal:cured_rubber', //'mna:bone_ash',
	Q: 'immersiveengineering:concrete_leaded', //'botania:quartz_dark',
	I: '#forge:ingots/steel',
  }).id(`mbm2:industrial_alloy_ingot`)

	//Energetic Blend
	global.powahEnergizing(event, [Item.of('#forge:dusts/glowstone').toJson(), Item.of('#forge:dusts/redstone').toJson()], Item.of('kubejs:energetic_blend'), 15000, 'mbm2:powah/energetic_blend')
	
  //Energetic Alloy
	event.recipes.tconstruct.casting_table('kubejs:energetic_alloy_ingot', 'tconstruct:molten_electrum', 90).cast('kubejs:energetic_blend').consumeCast().coolingTime(100).id(`mbm2:energetic_alloy_ingot`)
  
  //Soul Steel (tinkers)
   global.tinkersAlloying(event, 'tconstruct:molten_soulsteel', 90, [{name: 'createbigcannons:molten_nethersteel',amount: 90}, {name: 'kubejs:liquid_smoke',amount: 100}, {name: 'tconstruct:liquid_soul',amount: 500}], 1000, `mbm2:smeltery/alloys/molten_soulsteel`)
  
	//global.createApplying(event, 'compressedcreativity:compressed_iron_casing', Ingredient.of('#forge:ingots/compressed_steel'), Ingredient.of('#forge:treated_wood'), `mbm2:applying/compressed_steel_casing`)

  
  //Brick Chain
	event.recipes.createPressing('kubejs:unfired_clay_brick', 'minecraft:clay_ball').id(`mbm2:pressing/unfired_clay_brick`)

  event.recipes.createMixing([`kubejs:sandy_brick`], ['kubejs:unfired_clay_brick', 'sand']).id('mbm2:mixing/sandy_brick')

  event.recipes.createMixing([`kubejs:sturdy_brick`], ['kubejs:sandy_brick', 'gravel']).id('mbm2:mixing/sturdy_brick')

	event.recipes.createMixing('kubejs:tough_brick', [Fluid.of('kubejs:molten_slag', 125), '2x create:cinder_flour', 'kubejs:sturdy_brick']).heated().id(`mbm2:mixing/tough_brick`)
	//event.recipes.createMixing('2x tconstruct:scorched_brick', [Fluid.of('kubejs:molten_slag', 125), '2x create:cinder_flour', 'kubejs:sturdy_brick']).superheated().id(`mbm2:mixing/scorched_brick`)

  event.recipes.createFilling('kubejs:heated_brick', [Fluid.of('tconstruct:magma', 250), 'kubejs:tough_brick']).id('mbm2:filling/heated_brick')
  
	event.recipes.createCompacting('kubejs:spirited_brick', ['kubejs:heated_brick', 'spirit:soul_powder']).heated().id(`mbm2:compacting/spirited_brick`)

  //Reactive Blend
event.shaped('kubejs:reactive_blend', [
	'RL',
  'Q '
  ], {
	R: '#forge:dusts/redstone',
	L: '#forge:dusts/lapis',
	Q: '#forge:dusts/quartz'
  }).id(`mbm2:crafting/reactive_blend`)

  event.recipes.createMixing([`2x kubejs:reactive_blend`], ['#forge:dusts/redstone', '#forge:dusts/lapis', '#forge:dusts/quartz']).id('mbm2:mixing/reactive_blend')

  event.recipes.multiblocked.multiblock('mixer')
    .inputItems('#forge:dusts/redstone', '#forge:dusts/lapis', '#forge:dusts/quartz')
    .outputItem('3x kubejs:reactive_blend')
    .setPerTick(true)
    .inputFE(1024)
    .duration(120)

    //Hardened Glass
    global.tinkersAlloying(event, 'kubejs:molten_hardened_glass', 250, [{name: 'tconstruct:molten_quartz',amount: 50}, {name: 'tconstruct:molten_glass',amount: 250}, {name: 'tconstruct:molten_obsidian',amount: 250}], 1000, `mbm2:smeltery/alloys/molten_hardened_glass`)
 

  /*
    Supported recipe methods:
    
    .noCast()
    
    .multiUseCast(castType)
    
    .singleUseCast(castType)
    
    .switchSlots()*/

});