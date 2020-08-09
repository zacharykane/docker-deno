import { serve } from './deps.ts';

const decoder = new TextDecoder();
const s = serve({ port: 1994 });

for await (const req of s) {
    const buf = new Uint8Array(req.contentLength);
    let bufSlice = buf;

    let totRead = 0;
    while (true) {
        const nread = await req.body.read(bufSlice);
        if (nread === null) break;
        totRead += nread;
        if (totRead >= req.contentLength) break;
        bufSlice = bufSlice.subarray(nread);
    }

    const received = decoder.decode(bufSlice);
    const receivedJson = JSON.parse(received);
    receivedJson.what = `${receivedJson.what} wow neat!`;

    var myHeaders = new Headers({
        'Content-Type': 'application/json',
    });

    req.respond({
        body: JSON.stringify(receivedJson),
        headers: myHeaders,
    });
}
