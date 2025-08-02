import pkg from "cloudinary";
const { v2: cloudinary } = pkg;

import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: "du25wfdfx",
  api_key: "941467481684932",
  api_secret: "8GEhAPW5L3bn3qxjjAFOUFQsHhA",
});

const productStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Mern_Ecommers_Feb",
    format: () => "png",
    public_id: Date.now,
  },
});

const productParser = multer({ storage: productStorage });

export { productParser };
