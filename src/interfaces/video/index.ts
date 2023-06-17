import { IndividualInterface } from 'interfaces/individual';
import { GetQueryInterface } from 'interfaces';

export interface VideoInterface {
  id?: string;
  file_path: string;
  individual_id?: string;
  created_at?: any;
  updated_at?: any;

  individual?: IndividualInterface;
  _count?: {};
}

export interface VideoGetQueryInterface extends GetQueryInterface {
  id?: string;
  file_path?: string;
  individual_id?: string;
}
