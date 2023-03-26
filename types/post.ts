export type Tag = {
  id: string;
  name: string;
  color: string;
};

export type Post = {
  id: string;
  title: string;
  tags: Tag[];
};
