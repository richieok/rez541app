import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

let options = {
    region: 'us-east-1'
}

const fsignUrl = async ({ client, bucket, key }) => {
    const command = new GetObjectCommand({ Bucket: bucket, Key: key });
    return getSignedUrl(client, command, { expiresIn: 120 });
}

if (process.env.NODE_ENV) {
    options.credentials = {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
}

const client = new S3Client(options);

export const publicSignUrl = async (req, res) => {
    const { filename } = req.params;
    console.log(process.env.AWS_BUCKET)
    console.log(filename);
    // console.log(options);
    const url = await fsignUrl({ client, bucket: process.env.AWS_BUCKET, key: `public/${filename}` });
    console.log(url)
    res.send(url);
}

export const signUrl = async (req, res) => {
    const { folder, filename } = req.params;
    console.log(process.env.AWS_BUCKET)
    console.log(folder, filename)
    const url = await fsignUrl({ client, bucket: process.env.AWS_BUCKET, key: `${folder}/${filename}` });
    res.send(url);
}

export const publicSignUrls = async (req, res) => {
    const json = req.body
    let surls = []
    if (json && json.length > 0) {
        for (const filename of json) {
            const url = await fsignUrl({ client, bucket: process.env.AWS_BUCKET, key: `public/${filename}` });
            surls.push(url)
        }
    }
    res.json({
        status: "success",
        surls
    })
}

export const signUrls = async (req, res) => {
    const json = req.body
    console.log(req.user.id)
    let surls = []
    const folder = req.user.id
    if (json && json.length > 0) {
        for (const filename of json) {
            const url = await fsignUrl({ client, bucket: process.env.AWS_BUCKET, key: `${folder}/${filename}` });
            surls.push(url)
        }
    }
    res.json({
        status: "success",
        surls
    })
}