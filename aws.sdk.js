// AWS SDK 로드
const AWS = require("aws-sdk");

// S3 객체 생성
AWS.config.update({
  region: "ap-southeast-2",
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

// S3에 파일 업로드 함수
const uploadFileToS3 = async (bucketName, fileName, fileContent) => {
  const params = {
    Bucket: bucketName, // 업로드할 S3 버킷 이름
    Key: fileName, // S3 버킷에 저장될 파일의 이름
    Body: fileContent, // 파일의 내용
  };

  try {
    const data = await s3.upload(params).promise();
    console.log(`File uploaded successfully at ${data.Location}`);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

// S3에서 파일 다운로드 함수
const downloadFileFromS3 = async (bucketName, fileName) => {
  const params = {
    Bucket: bucketName, // 다운로드할 S3 버킷 이름
    Key: fileName, // 다운로드할 파일의 이름
  };

  try {
    const data = await s3.getObject(params).promise();
    console.log("File downloaded successfully:", data.Body.toString());
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};

// 예시로 사용할 버킷 이름과 파일 이름 설정
const bucketName = "your-bucket-name"; // S3 버킷 이름
const uploadFileName = "example.txt"; // 업로드할 파일의 이름
const uploadFileContent = "This is a test file for S3 upload."; // 파일의 내용
const downloadFileName = "example.txt"; // 다운로드할 파일의 이름

// S3에 파일 업로드
uploadFileToS3(bucketName, uploadFileName, uploadFileContent);

// S3에서 파일 다운로드
downloadFileFromS3(bucketName, downloadFileName);
