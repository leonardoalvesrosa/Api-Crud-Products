import { Request, Response } from 'express';
import CreateUserService from '../services/CreateSessionService';

class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createSessionService = new CreateUserService();

    const { email, password } = request.body;

    const user = await createSessionService.execute({
      email, password
    })

    return response.json(user);
  }
}

export default SessionController;