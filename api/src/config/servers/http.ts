import express from "express";
import routes from "../../routes";

function http(app: express.Application){

  app.use(express.json());
  app.use(routes);

  const port = process.env.PORT || 3333;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  })

}

export default http;

