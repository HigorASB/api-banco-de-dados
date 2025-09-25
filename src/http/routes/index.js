import { list, listById } from "../controllers/marcas.js";

export const routes = async (app) => {
  app.get("/", (request, reply) => {
    return reply.status(200).send({ message: "API ok!" });
  });

  app.get("/marcas", list);

  app.get("/marcas/:id", listById);

  app.get("/produtos/:id", (request, reply) => {
    return reply.status(200).send({
      message: `Requisição efetuada com sucesso para o produto de id ${request.params.id}`,
    });
  });
};
