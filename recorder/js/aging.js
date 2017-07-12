function Aging (upstep, downstep, agemax, agemin) {
  this._age = 0;
  this._upstep = upstep;
  this._downstep = downstep;
  this._agemin = agemin;
  this._agemax = agemax;
}

Aging.prototype.up = function () {
  this._age += this._upstep;
  if (this._age > this._agemax) {
    this._age = this._agemax;
  }
  return this;
}

Aging.prototype.down = function () {
  this._age -= this._downstep;
  if (this._age < this._agemin) {
    this._age = this._agemin;
  }
  return this;
}

Aging.prototype.update = function (cond) {
  if (cond) {
    this.up()
  } else {
    this.down()
  }
  return this;
}

Aging.prototype.get = function () {
  return this._age;
}

Aging.prototype.reset = function () {
  this._age = 0;
  return this;
}
