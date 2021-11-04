let conn;
const setupInput = function(connection) {
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
  // }
};
const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
    return;
  }
  if (key === "w") {
    conn.write("Move: up");
  }
  if (key === "a") {
    conn.write("Move: left");
  }
  if (key === "d") {
    conn.write("Move: right");
  }
  if (key === "s") {
    conn.write("Move: down");
  }
  if (key === "1") {
    conn.write("Say: I am sending message");
  }
  // console.log(key);
};

module.exports = {
  setupInput,
};
