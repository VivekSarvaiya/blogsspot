import fs from 'fs/promises';
import path from 'path';


export const imageUplaod = async (file, folder) => {

    if (!file) {
        return "File not received";
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + file.name.replace(/\W+/g, '_');

    try {
        const folderPath = path.join(process.cwd(), 'public', folder);
        await fs.mkdir(folderPath, { recursive: true });

        const imagePath = path.join(folderPath, filename);

        await fs.writeFile(imagePath, buffer);

        return imagePath;
    } catch (error) {
        console.log("Error occurred: ", error);
        return "Failed";
    }
};