const ImageKit = require("imagekit");

const imagekit = new ImageKit({ 
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
   
    
   
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,

    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(imageBuffer, fileName) {
    const result = await imagekit.upload({
        file: imageBuffer.toString("base64"),
        fileName: fileName,
    });
    return result;
    
}

module.exports = {
    uploadFile
};
