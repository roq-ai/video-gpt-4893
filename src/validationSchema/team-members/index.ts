import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  content_creator_id: yup.string().nullable(),
});
