import axios from 'axios';
import { Content } from '../../../interface';

export async function getData(email: string) {
  const res = await axios.get<Content[]>('sales/inquiries', {
    params: {
      s: {
        contactEmail: email,
      },
      limit: 1,
      sort: 'createdAt,DESC',
    },
  });

  return res;
}
