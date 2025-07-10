import { v2 as cloudinary } from "cloudinary"; //used to save videos in cloud
import fs from "fs"; //used to first save video on server in case of re upload good practice and then put it to cloudinary and then delete it on server

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async function (localfilepath) {
  try {
    if (!localfilepath) {
      return null;
    }
    const response = await cloudinary.uploader.upload(localfilepath, {
      //see documentation
      resource_type: "auto", //images,video,etc
      //file has been uploaded successfully
    });
    console.log(
      "File has been uploaded successfully to Cloudinary",
      response.url //upload hone ke baad url generate hoga public url
    );
    return response;
  } catch (error) {
    fs.unlinkSync(localfilepath); //if error occurs then delete the file from server
    return null;
  }
};

export { uploadOnCloudinary };
// This function uploads a file to Cloudinary and returns the response.
