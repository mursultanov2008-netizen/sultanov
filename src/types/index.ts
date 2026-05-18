export type AppType = {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: string;
  rating: string;
};

export type Filters = {
  search: string;
  category: string;
};

export type AppCardProps = {
  app: AppType;
};