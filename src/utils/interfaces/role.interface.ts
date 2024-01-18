export interface RoleProps {
  id: string;
  name: string;
  title: string;
  description: string;
  auth0RoleId: string;
  createdAt: string;
  updatedAt: string;
  author: {
    email: string;
    userId: string;
  };
  features: [];
}
