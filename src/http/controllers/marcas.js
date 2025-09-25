import { database } from "../../database/index.js";

export async function list(request, reply) {
  try {
    const marcas = await database("marcas").select();
    return reply.status(200).send({
      message: "Dados consultados com sucesso.",
      data: marcas,
      error: false,
    });
  } catch (error) {
    console.error(error);
    return reply.status(500).send({
      message: "Ocorreu um erro interno.",
      data: marcas,
      error: true,
    });
  }
}

export async function listById(request, reply) {
  try {
    const { id } = request.params;
    const marca = await database("marcas").where({ id: id }).first();

    if (!marca) {
      return reply.status(404).send();
    }

    return reply.status(200).send({
      message: "Dados consultados com sucesso.",
      data: marca,
      error: false,
    });
  } catch (error) {
    console.error(error);
    return reply.status(500).send({
      message: "Ocorreu um erro interno.",
      data: marcas,
      error: true,
    });
  }
}
