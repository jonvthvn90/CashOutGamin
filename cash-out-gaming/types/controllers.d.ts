interface UserController {
    createUser(req: Request, res: Response): Promise<void>;
    getUser(req: Request, res: Response): Promise<void>;
    updateUser(req: Request, res: Response): Promise<void>;
    deleteUser(req: Request, res: Response): Promise<void>;
  }
  
  interface GameController {
    createGame(req: Request, res: Response): Promise<void>;
    getGame(req: Request, res: Response): Promise<void>;
    updateGame(req: Request, res: Response): Promise<void>;
    deleteGame(req: Request, res: Response): Promise<void>;
  }
  
  interface CommentController {
    createComment(req: Request, res: Response): Promise<void>;
    getComment(req: Request, res: Response): Promise<void>;
    updateComment(req: Request, res: Response): Promise<void>;
    deleteComment(req: Request, res: Response): Promise<void>;
  }
  
  interface RatingController {
    createRating(req: Request, res: Response): Promise<void>;
    getRating(req: Request, res: Response): Promise<void>;
    updateRating(req: Request, res: Response): Promise<void>;
    deleteRating(req: Request, res: Response): Promise<void>;
  }