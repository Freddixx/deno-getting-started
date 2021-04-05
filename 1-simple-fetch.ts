const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const body = new Uint8Array(await res.arrayBuffer());
Deno.stdout.write(body);