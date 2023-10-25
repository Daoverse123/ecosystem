export type offeringType = {
  _id: string;
  name: string;
  description: string;
  organization: string;
  logo: {
    id: string;
    secure_url: string;
    _id: string;
  };
  credits: number;
  tags: string[];
  visible: boolean;
  images: {
    id: string;
    secure_url: string;
    _id: string;
  }[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type tagType = {
  count: number;
  tag: string;
};
