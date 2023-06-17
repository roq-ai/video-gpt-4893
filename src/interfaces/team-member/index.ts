import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TeamMemberInterface {
  id?: string;
  user_id?: string;
  content_creator_id?: string;
  created_at?: any;
  updated_at?: any;

  user_team_member_user_idTouser?: UserInterface;
  user_team_member_content_creator_idTouser?: UserInterface;
  _count?: {};
}

export interface TeamMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  content_creator_id?: string;
}
