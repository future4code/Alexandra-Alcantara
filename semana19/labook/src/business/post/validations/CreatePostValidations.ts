import { PostDataDTO, PostData } from "../../../model/post";

export default class CreatePostValidation {
  protected postInputValidation = ({
    photo,
    description,
    type,
  }: PostDataDTO): PostData => {
    if (!photo || !description || !type) {
      throw new Error(
        "Please, fill all fields: 'photo', 'description' and 'type'."
      );
    }

    return { photo, description, type };
  };
}
