import { Marked, MarkedOptions } from "../mod.ts";
import { assertEquals } from "./deps.ts";

const HTMLDIR = "./tests/html";
const MDDIR = "./tests/md";

const tests = Deno.readDirSync(HTMLDIR);

for (const t of tests) {
    Deno.test({
        name: t.name,
        fn(): void {
            const md = Deno.readTextFileSync(MDDIR + "/" + t.name.slice(0, t.name.lastIndexOf(".")) + ".md");
            const html = Deno.readTextFileSync(HTMLDIR + "/" + t.name);

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