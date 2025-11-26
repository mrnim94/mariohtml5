global.Mario = global.Mario || {};
require('../webapp/code/level.js');

describe('Mario.Level', () => {
  beforeAll(() => {
    if (!Mario.Tile.Behaviors || Mario.Tile.Behaviors.length === 0) {
      Mario.Tile.LoadBehaviors();
    }
  });

  test('GetBlockCapped clamps coordinates outside the map bounds', () => {
    const level = new Mario.Level(2, 2);
    level.SetBlock(1, 1, 5);

    expect(level.GetBlockCapped(99, 99)).toBe(5);
    expect(level.GetBlockCapped(-10, -3)).toBe(0);
  });

  test('IsBlocking reflects solid tile behavior in all directions', () => {
    const level = new Mario.Level(2, 2);
    level.SetBlock(0, 0, 5); // Behavior 130 -> BlockAll

    expect(level.IsBlocking(0, 0, 0, 0)).toBe(true);
    expect(level.IsBlocking(0, 0, 0, 1)).toBe(true);
    expect(level.IsBlocking(0, 0, 0, -1)).toBe(true);
  });
});

