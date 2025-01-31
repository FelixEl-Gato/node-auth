import { Server } from './presentation/server';

(() => {
  main();
})();

async function main() {

  // todo: await base de datos

  const server = new Server({ port: 3100 });
  await server.start();
}