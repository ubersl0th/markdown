/**
 * @license
 * 
 * markdown deno tests
 * Copyright (c) 2021, Jason Hsu. (MIT Licensed)
 * https://github.com/kittywantsbacon/markdown
 * With reference from https://github.com/ts-stack/markdown/blob/bb47aa8e625e89e6aa84f49a98536a3089dee831/test/index.ts
 */
import { Marked, MarkedOptions } from "../mod.ts";
import { assertEquals, fromFileUrl, join, dirname } from "./deps.ts"; 

const HTMLDIR = fromFileUrl(join(dirname(import.meta.url), "./tests/html"));
const MDDIR = fromFileUrl(join(dirname(import.meta.url), "./tests/md"));

const tests = Deno.readDirSync(HTMLDIR);

for (const t of tests) {
    Deno.test({
        name: t.name,
        fn(): void {
            const md = Deno.readTextFileSync(join(MDDIR, t.name.slice(0, t.name.lastIndexOf(".")) + ".md"));
            const html = Deno.readTextFileSync(join(HTMLDIR, t.name));

            const flags = t.name.split('.').slice(1);
            const options = new MarkedOptions();
            if (flags.length) {
              for (let flag of flags) {
                let val = true;

                if (flag.indexOf('no') === 0) {
                  flag = flag.substring(2);
                  val = false;
                }

                if (options.hasOwnProperty(flag)) {
                  (options as any)[flag] = val;
                }
              }
            }
            Marked.setOptions(options);
            const actual = Marked.parse(md).content;
            assertEquals(actual, html);
        }
    });
}