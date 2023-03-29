export type TagType = {
  id: string;
  name: string;
  color: string;
};

export type PostType = {
  id: string;
  title: string;
  tagList: TagType[];
};
