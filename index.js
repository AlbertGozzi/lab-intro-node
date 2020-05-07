class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let positionToAdd = this.items.findIndex(number => number > item);
    if (positionToAdd === -1) {
      this.items.push(item);
    } else {
      this.items.splice(positionToAdd, 0, item);
    }
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.length) { return Error(OutofBounds); }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) { return Error(EmptySortedList); }
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) { return Error(EmptySortedList); }
    return this.items[0];
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (this.length === 0) { return Error(EmptySortedList); }
    return this.sum()/this.length;
  }
}

module.exports = SortedList;
