interface OrganizationProfileProps {
  tags: string[];
  name: string;
  imageFilename: string;
  description: string;
}

export interface OrganizationProps {
  type: string;
  active: boolean;
  specifications: [];
  profile: OrganizationProfileProps;
  plan: string;
  members: [];
  integrations: [];
  clients: [];
  allowedRoles: [];
  billingEmail: string;
  segment: string;
  limits: {
    members: number;
    companies: number;
    clients: number;
    steps: number;
    timelines: number;
    projects: number;
    journeys: number;
    personas: number;
    videos: number;
  };
  id: string;
  createdAt: string;
  updatedAt: string;
}
