
export enum OrganizationType {
  HOSPITAL = 'Hospital',
  NGO = 'NGO',
  BLOOD_BANK = 'Blood Bank',
}

export interface Organization {
  name: string;
  type: OrganizationType;
  address: string;
  phone: string;
  contact_method: 'call' | 'message' | 'both';
}
