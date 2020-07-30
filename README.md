# markdown

Deno Markdown module forked from https://github.com/ts-stack/markdown/tree/bb47aa8e625e89e6aa84f49a98536a3089dee831

### Example usage

Simple md2html.ts script:

```typescript
import { Marked } from "./mod.ts";

const decoder = new TextDecoder("utf-8");
const filename = Deno.args[0];
const markdown = decoder.decode(await Deno.readFile(filename));
const markup = Marked.parse(markdown);
console.log(markup.content);
console.log(JSON.stringify(markup.meta))
```

Now running:

```bash
deno run --allow-read md2html.ts example.md > example.html
```

Will output:

```html
<h1 id="hello-world">Hello World</h1>
<h2 id="this-an-example-for-md2html-ts-">
  This an example for <code>md2html.ts</code>
</h2>
<p>A small paragraph that will become a <code>&lt;p&gt;</code> tag</p>
<hr />
<p>Code Block (md2html.ts)</p>

<pre><code class="lang-typescript">import { Marked } from &quot;./mod.ts&quot;;

const decoder = new TextDecoder("utf-8");
const filename = Deno.args[0];
const markdown = decoder.decode(await Deno.readFile(filename));
const markup = Marked.parse(markdown);
console.log(markup.content);
console.log(JSON.stringify(markup.meta))
</code></pre>
<p>
  This module is forked from
  <a
    href="https://github.com/ts-stack/markdown/tree/bb47aa8e625e89e6aa84f49a98536a3089dee831"
    >ts-stack/markdown</a
  >
</p>
<p>Made for Deno <img src="https://deno.land/logo.svg" alt="deno-logo" /></p>

{"title":"Hello world!","subtitle":"Front-matter is supported!","boolean":true,"list-example":["this","is",{"a":"list"}]}
```

---

### Notes

I had to do some changes to the source code to make the compiler happy, mostly fixes for things that were uninitialized and possibly null or undefined
