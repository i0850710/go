import type { Equal, Expect, NotAny } from "@type-challenges/utils";

/* _____________ 13 - Hello World 你的代码 _____________ */
type HelloWorld = any; // expected to be a string

/* _____________ 13 - Hello World 测试用例 _____________ */
type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
