
// Private Method

// Method1
class Widget {
  foo (baz) {
    this._bar(baz)
  }

  _bar (baz) {
    console.log(baz)
  }
}

// Method2: module export patteren
class Widget {
  foo (baz) {
    bar.call(this, baz)
  }
}

function bar (baz) {
  return this.snaf = baz
}

// Metohd3: Symbol
const bar = Symbol('bar')
const snaf = Symbol('snaf')

class Widget {

  // 公有方法
  foo (baz) {
    this[bar](baz)
  }

  // 私有方法
  [bar] (baz) {
    return this[snaf] = baz
  }

};
