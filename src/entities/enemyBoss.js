
export function makeBoss(k, initialPos) {
  return k.make([
    k.pos(initialPos),
    k.sprite("burner", { anim: "idle"}),
    k.area({ shape: new k.Rect(k.vec2(0,10), 12, 12)}),
    k.body({mass:100, jumpForce: 320}),
    k.anchor("center"),
    k.state("idle", [
        "idle",
        "follow",
        "open-fire",
        "fire",
        "shut-fire",
        "explode",
    ]),
    k.health(15),
    k.opacity(1),
  ])
}

/* 3H25 33 */
