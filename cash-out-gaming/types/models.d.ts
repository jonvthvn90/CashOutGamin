interface User {
    id: string;
    name: string;
    email: string;
    password: string;
  }
  
  interface Game {
    id: string;
    title: string;
    description: string;
    tags: string[];
  }
  
  interface Comment {
    id: string;
    text: string;
    userId: string;
    gameId: string;
  }
  
  interface Rating {
    id: string;
    rating: number;
    userId: string;
    gameId: string;
  }