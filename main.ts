player.onChat("kopiuj", function () {
    blocks.clone(
    world(5, -50, 5),
    world(-5, -60, -5),
    world(10, -60, 10),
    CloneMask.Masked,
    CloneMode.Normal
    )
})
player.onChat("crew", function () {
    blocks.fill(
    AIR,
    pos(-5, -60, -5),
    pos(5, -50, 5),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(-10, -60, -10),
    pos(10, -40, 10),
    FillOperation.Replace
    )
})
player.onChat("k", function () {
    shapes.line(
    DIAMOND_BLOCK,
    pos(0, 1, 0),
    pos(0, 8, 0)
    )
    shapes.line(
    DIAMOND_BLOCK,
    pos(1, 4, 0),
    pos(4, 1, 0)
    )
    shapes.line(
    DIAMOND_BLOCK,
    pos(1, 5, 0),
    pos(4, 8, 0)
    )
})
player.onChat("l", function () {
    blocks.fill(
    DIAMOND_BLOCK,
    pos(0, 1, 0),
    pos(0, 10, 0),
    FillOperation.Replace
    )
    blocks.fill(
    DIAMOND_BLOCK,
    pos(0, 1, 1),
    pos(0, 1, 4),
    FillOperation.Replace
    )
})
player.onChat("1", function () {
    shapes.line(
    DIAMOND_BLOCK,
    pos(2, 1, 0),
    pos(-2, 1, 0)
    )
    shapes.line(
    DIAMOND_BLOCK,
    pos(0, 7, 0),
    pos(0, 1, 0)
    )
    shapes.line(
    DIAMOND_BLOCK,
    pos(1, 7, 0),
    pos(4, 5, 0)
    )
})
player.onChat("u", function () {
    shapes.line(
    DIAMOND_BLOCK,
    pos(0, 1, 0),
    pos(0, 7, 0)
    )
    shapes.line(
    DIAMOND_BLOCK,
    pos(1, 1, 0),
    pos(4, 1, 0)
    )
    shapes.line(
    DIAMOND_BLOCK,
    pos(5, 1, 0),
    pos(5, 7, 0)
    )
})
player.onChat("i", function () {
    blocks.fill(
    DIAMOND_BLOCK,
    pos(1, 1, 1),
    pos(1, 5, 1),
    FillOperation.Replace
    )
})
player.onChat("h", function () {
    shapes.line(
    DIAMOND_BLOCK,
    pos(0, 1, 0),
    pos(0, 7, 0)
    )
    shapes.line(
    DIAMOND_BLOCK,
    pos(1, 4, 0),
    pos(4, 4, 0)
    )
    shapes.line(
    DIAMOND_BLOCK,
    pos(5, 1, 0),
    pos(5, 7, 0)
    )
})
player.onChat("4", function () {
    shapes.line(
    DIAMOND_BLOCK,
    pos(0, 1, 0),
    pos(0, 8, 0)
    )
    shapes.line(
    DIAMOND_BLOCK,
    pos(1, 4, 0),
    pos(3, 4, 0)
    )
    shapes.line(
    DIAMOND_BLOCK,
    pos(4, 4, 0),
    pos(4, 8, 0)
    )
})
player.onChat("wykop", function () {
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    IRON_PICKAXE,
    1
    )
    blocks.fill(
    DIRT,
    world(10, -60, 10),
    world(20, -50, 20),
    FillOperation.Replace
    )
    player.runChatCommand("kopiuj")
})
