import { Router } from "express";

export class AuthRoutes {

  static get routes(): Router {

    const router = Router();

    // Definir rutas principales
    router.post('/login', (req, res) => {
      res.json({ message: 'POST /auth/login' });
    });

    router.post('/register', (req, res) => {
      res.json({ message: 'POST /auth/register' });
    });

    return router;
  }
}