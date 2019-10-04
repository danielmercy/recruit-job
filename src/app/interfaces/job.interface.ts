interface JobCategory {
    id: number;
    name: string;
    image: string;
    created_at: string;
}

interface JobCompnay {
  id: string,
  website: string;
  name: string;
  email: string;
  contact: string;
  postcode: string;
  city: string;
  state: string;
  country: string;
  address: string;
  category: string;
  logo: string;
  image: string;
  created: string;
}

export interface Response {
  data: { message: Job[] }
}

export interface Response2 {
  data: Job
}

export interface Job {
  id: number;
  title: string;
  requirements: string;
  description: string;
  category: JobCategory;
  website: string;
  address: string;
  city: string;
  state: string;
  country: string;
  created: string;
  company: JobCompnay;
}
  
  