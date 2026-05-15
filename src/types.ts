export type App = {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: string;
  rating: string;
};

export type AppCardProps = {
  app: App;
};

export type Filters = {
  search: string;
  category: string;
};