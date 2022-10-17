//@ts-ignore
const utf8e: TextEncoder = new TextEncoder();
const encode = (data: string) => utf8e.encode(data + "\0");

export {
    encode
}