import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { randomInt } from './randomInt.js';

Deno.serve(async () => {

    const url = `https://wa3.i-3-i.info/word${randomInt(11000, 19999)}.html`;

    const title = new DOMParser().parseFromString(await fetch(url).then(res => res.text()), "text/html").querySelector("title").textContent;

    return new Response(`
        [@] ${title}
         ${url}
    `.replaceAll("    ", ""));
})