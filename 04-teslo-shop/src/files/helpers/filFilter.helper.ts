export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  console.log({ file });

  if (!file) return callback(new Error('File is empty'), false);

  const fileExcepetion = file.mimetype.split('/')[1];
  const validExtension = ['jpg', 'jpeg', 'png', 'gif'];

  if (validExtension.includes(fileExcepetion)) return callback(null, true);
  callback(null, false);
};
