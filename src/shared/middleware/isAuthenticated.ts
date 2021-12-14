import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";

export default function isAuthenticated(request: Request, response: Response, next: NextFunction): void {
  // recupera o token informado pelo usuário
  let authHeaders = request.headers.authorization;

  if (!authHeaders) { // frontend não informou o token
    throw new AppError(`Token não está presente`, 400);
  }
  // frontend retornou o token
  let [beared, token] = authHeaders.split(' ')
  // verifica se o tokem é válido
  try {
    // devemos utilizar a chave secreta é privada
    let tokenVerificado = verify(token, 'shazamleozera');

    return next() // passa pra frente, entra na rota

  } catch (e) {
    throw new AppError('Token inválido', 400);
  }

}