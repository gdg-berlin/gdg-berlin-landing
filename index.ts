import Handlebars from "handlebars";

const template = await Bun.file("template.html").text();
const handlebars = Handlebars.compile(template);
const output = handlebars({ name: "World" });

await Bun.write("index.html", output);
