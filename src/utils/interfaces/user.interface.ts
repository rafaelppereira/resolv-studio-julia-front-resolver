interface UserOrganizationProps {
  organizationId: string;
  role: string;
  name: string;
}

export interface UserProps {
  id: string;
  name: string;
  auth0Id: string;
  lastOrganization: string;
  email: string;
  verified: boolean;
  phone: string;
  role: string;
  organizations: UserOrganizationProps[];
  createdAt: string;
  updatedAt: string;
  lastSignin: string;
  organizationImageFilename: string;
  organizationName: string;
  organizationType: string;
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
  usage: {
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
  studioRoleTitle: string;
  studioRole: string;
  featureAuthorization: {
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
  };
}

export interface UserAuthorizationProps {
  id: string;
  name: string;
  lastOrganization: string;
  email: string;
  verified: boolean;
  phone: string;
  role: string;
  organizations: [];
  createdAt: string;
  updatedAt: string;
}
