interface UserService {
    createUser(user: User): Promise<User>;
    getUser(id: string): Promise<User>;
    updateUser(id: string, user: User): Promise<User>;
    deleteUser(id: string): Promise<void>;
  }
  
  interface GameService {
    createGame(game: Game): Promise<Game>;
    getGame(id: string): Promise<Game>;
    updateGame(id: string, game: Game): Promise<Game>;
    deleteGame(id: string): Promise<void>;
  }
  
  interface CommentService {
    createComment(comment: Comment): Promise<Comment>;
    getComment(id: string): Promise<Comment>;
    updateComment(id: string, comment: Comment): Promise<Comment>;
    deleteComment(id: string): Promise<void>;
  }
  
  interface RatingService {
    createRating(rating: Rating): Promise<Rating>;
    getRating(id: string): Promise<Rating>;
    updateRating(id: string, rating: Rating): Promise<Rating>;
    deleteRating(id: string): Promise<void>;
  }