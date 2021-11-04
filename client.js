const net = require("net");
const { IP, PORT, NAME } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
  });
  conn.on("connect", () => {
    conn.write(NAME);
  });
  conn.on("end", () => {
    console.log("disconnected");
    process.exit();
  });

  return conn;
};
module.exports = {
  connect,
};
