const assert = require('assert').strict;
import Transform from "transform.js";

const test = async () => {

  const src = {
    test_metrics: {
      foo: "foo",
      bar: "bar"
    }
  };

  const expected = {
    foo: "FOO",
    bar: "BAR"
  };

  const got = (await new Transform().format(src, "test", "example", "metrics"));

  assert.deepStrictEqual(got, expected);

  console.log(JSON.stringify(got, null, 2));

}

test();
