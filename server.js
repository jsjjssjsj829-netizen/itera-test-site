const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const port = Number(process.env.PORT || 8796);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, `http://127.0.0.1:${port}`).pathname;

  if (req.method === "POST" && pathname === "/evolveops/deploy") {
    let raw = "";
    req.setEncoding("utf8");
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1024 * 1024) req.destroy();
    });
    req.on("end", () => {
      let payload = {};
      try {
        payload = raw ? JSON.parse(raw) : {};
      } catch {
        payload = { raw };
      }
      const eventPath = path.join(root, "deploy-events.json");
      const previous = fs.existsSync(eventPath) ? JSON.parse(fs.readFileSync(eventPath, "utf8")) : [];
      const event = {
        id: payload.id || `deploy-${Date.now()}`,
        event: payload.event || "deployment.trigger",
        receivedAt: new Date().toISOString(),
        project: payload.project || null,
        prDraft: payload.prDraft || null,
      };
      fs.writeFileSync(eventPath, JSON.stringify([event, ...previous].slice(0, 20), null, 2));
      res.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
      });
      res.end(JSON.stringify({ ok: true, received: event }));
    });
    return;
  }

  const filePath = path.join(root, pathname === "/" ? "index.html" : pathname);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Customer test site running at http://127.0.0.1:${port}`);
});
