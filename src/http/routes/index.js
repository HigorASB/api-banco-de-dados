export const routes = async (app) => {
  app.get("/", (request, reply) => {
    reply.send({ hello: "world" });
  });
  app.get("/produtos/:id", (request, reply) => {
    return reply
      .status(200)
      .send({
        message: `Requisição efetuada com sucesso para o produto de id ${request.params.id}`,
      });
  });
};
