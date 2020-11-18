exports.handler = async (event) => {
    let vector = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    vector_ordenado = vector.slice().sort();

    return {
        statusCode: 200,
        body: 'Vector sin ordenar: ' + vector + '\nVector ordenado: ' + vector_ordenado,
      }
}
