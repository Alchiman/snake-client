const setupInput = function(connection) {
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
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "1") {
    connection.write("Say: I am sending message");
  }
  // console.log(key);
};

module.exports = {
  setupInput,
};
