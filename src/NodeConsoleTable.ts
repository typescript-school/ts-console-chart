
// @ts-ignore
const table = [
    {
        "Endpoint": "hellloworld.Greet [unary]",
        "Connections Created": "3",
        "Message Streams Created": "N/A",
        "Bytes Send": "23B",
        "Bytes Received": "0"
    },
    {
        "Endpoint": "hellloworld.GreetMany [duplex]",
        "Connections Created": "5",
        "Message Streams Created": "16",
        "Bytes Send": "145234B",
        "Bytes Received": "23B"
    },
    {
        "Endpoint": "Total",
        "Connections Created": "8",
        "Message Streams Created": "16",
        "Bytes Send": "145234B",
        "Bytes Received": "23B"
    }
]

console.table(table);
