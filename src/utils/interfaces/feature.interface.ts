export interface FeatureProps {
  description: string;
  code: string;
  page: {
    pageId: string;
    description: string;
    name: string;
  };
  apis: [];
  id: string;
  createdAt: string;
  updatedAt: string;
  author: {
    email: string;
    userId: string;
  };
}
