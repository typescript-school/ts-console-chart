const ui = require('cliui')({
    // width: 60
});



const table = {
    headers: ["Endpoint", "Connections Created", "Message Streams Created", "Bytes Send", "Bytes Received"],
    rows : [
        ["hellloworld.Greet [unary]", "3", "N/A", "23B", , "0"],
        ["hellloworld.GreetMany [duplex]", "5", "16", "145234B", "23B"],
        ["Total", "8", "16", "143354B", "143354B"]
    ]
}

const render = (table : any) => {
  const header = table.headers.join('\t');
  const rows = table.rows.map((row: Array<string>) => row.join('\t')).join('\n');

  return [header, rows].join("\n");
};

ui.div(render(table));

console.log(ui.toString())
