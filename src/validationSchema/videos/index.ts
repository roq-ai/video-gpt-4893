import * as yup from 'yup';

export const videoValidationSchema = yup.object().shape({
  file_path: yup.string().required(),
  individual_id: yup.string().nullable(),
});
