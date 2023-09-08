import axios from "axios";
import { NextResponse } from "next/server"

export const GET = async (req) => {
    try {
        const images = await axios.get(
            "https://api.unsplash.com/search/photos/?query=cat&page=1&per_page=10&client_id=qdjHPzZENPpH2c0_N5Ml8V-phdPo1BWfl_c8dDHiizw"
        );

        if (images.status === 200) {
            const data = [];
            images.data.results.map((elem, i) => data.push(elem.urls))
            return NextResponse.json({ results: data, statusCode: 200 });
        } else {
            return NextResponse.json({ message: "Cannot fetch images", statusCode: 400 });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error", statusCode: 500 });
    }
}
