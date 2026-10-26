// Arithmetic tests for the same formulas used by script.js.
const assert=require('node:assert/strict');
function levels(entry,distance,rr,side='BUY'){const s=side==='BUY'?1:-1;return {entry,sl:entry-s*distance,tp1:entry+s*distance*rr,tp2:entry+s*distance*rr*1.5,tp3:entry+s*distance*rr*2}}
assert.deepEqual(levels(2350,5,2,'BUY'),{entry:2350,sl:2345,tp1:2360,tp2:2365,tp3:2370});
assert.deepEqual(levels(2350,5,2,'SELL'),{entry:2350,sl:2355,tp1:2340,tp2:2335,tp3:2330});
console.log('PASS: BUY and SELL calculator tests');
