import App from "./app";
import ReviewRoute from "./routes/review.routes";

const app = new App({
  apiRoutes: [new ReviewRoute()],
});

app.listen();
