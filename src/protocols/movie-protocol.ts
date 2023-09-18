export type Movie = {
  id: number;
  movie: string;
  platform: string;
  status: boolean;
};

export type CreateMovie = Omit<Movie, "id" | "status">;

export type UpdateMovie = Omit<Movie, "movie" | "platform">;
