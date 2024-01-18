export interface PageProps {
  description: string;
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  author: {
    email: string;
    id: string;
  };
}
