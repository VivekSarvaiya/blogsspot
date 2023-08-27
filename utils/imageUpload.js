import path from "path";
import { writeFile } from "fs/promises";

export const imageUplaod = async (file, folder) => {

    if (!file) {
        return "File not received"
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + file.name.replaceAll(" ", "_");
    console.log(filename);
    try {
        const imageUrl = await writeFile(
            path.join(process.cwd(), `public/${folder}/` + filename),
            buffer
        );
        return imageUrl;
    } catch (error) {
        console.log("Error occured ", error);
        return "Failed"
    }
};