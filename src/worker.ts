import html from "./index.html";

export default {
  async fetch(request: Request, environment, context): Promise<Response> {
    // Serve raw HTML using HTTP/2 for the CSS file

    return new Response(html, {
      headers: {
        "content-type": "text/html",
        Link: "</test.css> rel=preload; as=style",
      },
    });
  },
  async scheduled(controller, environment, context) {
    // await doATask();
  },
};
