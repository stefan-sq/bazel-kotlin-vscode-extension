export interface AspectReleaseInfo {
  version: string;
  bazelVersion: string;
  sha256: string;
}

export const ASPECT_ASSET_NAMES = [
  "kls-aspect-bazel6.zip",
  "kls-aspect-bazel7.zip",
  "kls-aspect-bazel8.zip",
];

export const ASPECT_RELEASE_VERSION = "v0.5.5";

export const ASPECT_RELEASES: AspectReleaseInfo[] = [
  {
    bazelVersion: "6",
    version: "v0.5.5",
    sha256: "6c1f8046f8c629f61c9ad6b42f67065c5e29c2cae4ccb541a3735e5aeab40796",
  },
  {
    bazelVersion: "7",
    version: "v0.5.5",
    sha256: "077c628e55a54b957e85ac7a1bf09e02ed9e2799324e0350658f4101b71229d2",
  },
  {
    bazelVersion: "8",
    version: "v0.5.5",
    sha256: "d7c8592f0281067292b2cafd7fe70b881979be403b523f2fb3eccd75ba38e1c9",
  },
];

export const KLS_RELEASE_ARCHIVE_SHA256: Record<string, string> = {
  "v1.3.14-bazel":
    "39eda21ef69e448ed9738c35993158f797f0817e8d56ff44abbd7c6981197251",
  "v1.3.15-bazel":
    "6fcb725ec0aaecd5dfb14af40e4245f2f9c1c22d1f57bee86f812d0599d5616e",
  "v1.3.16-bazel":
    "ad9912882298cfc8e3e25f7dd16b2c5c1d683fb4d718f42044720388586e0a74",
  "v1.3.17-bazel":
    "e2302bb80902aa47203325268037c0f8793630e80261dca4d00272e61c9cde0f",
  "v1.3.18-bazel":
    "cf8ea6d7f11415957d0bd538d34b7dd199697a7596e6a356b57ec2446331e574",
  "v1.5.0-bazel":
    "2e915df0a75d24ddae168a860c507729246c76b99bebab9ad2f40329963bb5fd",
  "v1.5.1-bazel":
    "10351d04fbcb2f9ef42e55e808a5d10b6d5090e146bf65c698ff47b18f19650d",
  "v1.5.2-bazel":
    "25cf3f238c0948832726867477de4b145d017467f4184e2384532ecc8ef8d169",
  "v1.5.3-bazel":
    "2d6f765febecb5a9db1c0b412a3292fdea5f4457779892bb049af7fda617dfae",
  "v1.6.0-bazel":
    "7617d38bc08ea2a4c92df5626e1b89ffaabedccc9276fc2e6f6ee0507f8fb730",
  "v1.6.1-bazel":
    "91f4a08d0f76209c3e314d995c80be360bde0e2489e18de2c329cba6a5e58efd",
  "v1.6.2-bazel":
    "83806ddb50b19cbd24ba55a82a74da421ff40593c984036cfbfb7a9d37347051",
  "v1.6.3-bazel":
    "972023ba65a9ac321232ba60233b9e88c8b5c7cf18a976b0e102993d9aedcdbb",
   "v1.6.5-bazel":
    "c4377def6d180e0b7b3d67eae7854ab55fed2b00e92da01d57592accbc526523",
};
