/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CLOUDINARY_CLOUD_NAME?: string;
  readonly PUBLIC_CLOUDINARY_ALBUM_FOLDER?: string;
  readonly PUBLIC_R2_ORIGINALS_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
