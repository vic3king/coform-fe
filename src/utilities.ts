export const getFileExt = (fileName: string) => {
  return fileName?.split(".")?.pop()?.toLowerCase();
};
