const ApiError = require('../../utils/ApiError');
const { sendSuccess } = require('../../utils/apiResponse');
const { resolveMediaUrl } = require('../../utils/productMedia');

const buildImageUploadResponse = (req, folderName) => {
  if (!req.file) {
    throw new ApiError(400, 'Image file is required');
  }

  return resolveMediaUrl(`/uploads/${folderName}/${req.file.filename}`);
};

const uploadProductImage = async (req, res) => {
  const url = buildImageUploadResponse(req, 'products');

  return sendSuccess(res, {
    statusCode: 201,
    message: 'Image uploaded successfully',
    data: { url },
  });
};

const uploadCategoryImage = async (req, res) => {
  const url = buildImageUploadResponse(req, 'categories');

  return sendSuccess(res, {
    statusCode: 201,
    message: 'Image uploaded successfully',
    data: { url },
  });
};

module.exports = {
  uploadProductImage,
  uploadCategoryImage,
};
