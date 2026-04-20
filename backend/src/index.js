export default {
  async fetch(request) {

    const url = new URL(request.url);

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    // GET students
    if (request.method === "GET" && url.pathname === "/students") {
      return Response.json([
        { id: 1, name: "Ravi", course: "B.Tech" },
        { id: 2, name: "Sita", course: "B.Sc" }
      ], { headers });
    }

    // POST student
    if (request.method === "POST" && url.pathname === "/student") {
      return Response.json({ message: "Student added" }, { headers });
    }

    return new Response("API Running", { headers });
  }
};