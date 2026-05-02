const CLOUDINARY_IMAGE_BASE = "https://res.cloudinary.com";

export type CloudinaryImageOptions = {
  width?: number;
  height?: number;
  crop?: "fill" | "fit" | "limit" | "scale";
  quality?: "auto" | number;
};

const trimSlashes = (value: string) => value.replace(/^\/+|\/+$/g, "");

const encodePath = (value: string) =>
  value
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/");

export const getCloudinaryImageUrl = (
  publicId: string,
  options: CloudinaryImageOptions = {}
) => {
  const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!cloudName) {
    throw new Error("Missing PUBLIC_CLOUDINARY_CLOUD_NAME.");
  }

  const folder = trimSlashes(import.meta.env.PUBLIC_CLOUDINARY_ALBUM_FOLDER ?? "");
  const normalizedPublicId = trimSlashes(publicId);
  const assetPath = folder ? `${folder}/${normalizedPublicId}` : normalizedPublicId;
  const transforms = [
    "f_auto",
    `q_${options.quality ?? "auto"}`,
    options.width ? `w_${options.width}` : undefined,
    options.height ? `h_${options.height}` : undefined,
    options.crop ? `c_${options.crop}` : undefined
  ].filter(Boolean);

  return [
    CLOUDINARY_IMAGE_BASE,
    encodeURIComponent(cloudName),
    "image",
    "upload",
    transforms.join(","),
    encodePath(assetPath)
  ].join("/");
};

export const getR2OriginalDownloadUrl = (r2Key: string) => {
  const baseUrl = import.meta.env.PUBLIC_R2_ORIGINALS_BASE_URL;

  if (!baseUrl) {
    return null;
  }

  return `${baseUrl.replace(/\/+$/g, "")}/${encodePath(r2Key)}`;
};
