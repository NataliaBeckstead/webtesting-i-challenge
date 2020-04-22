module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement = item.enhancement + 1;
    return item;
  } else {
    item.enhancement = 20;
    return item;
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return item;
}

function get(item) {
  return { ...item };
}
