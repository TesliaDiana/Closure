'use strict';

const seq = (cf) => (af) => typeof af === 'number'
  ? cf(af)
  : seq((acc) => cf(af(acc)));
module.exports = { seq };
