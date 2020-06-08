import axios from 'axios';

export default async (query) => {
    const url = `https://api.iconfinder.com/v4/icons/search?query=${query}`;
    return await axios.get(url, {
        headers: {
            "Authorization" : "Bearer CR60J0mWGfAVFU74vkYe4zIkKUFUojPexsaSICaNTPIKnILNbE76miRPpShdiLTq"
        }
    });
}