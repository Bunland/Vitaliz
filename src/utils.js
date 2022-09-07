const utf8e = new TextEncoder();
const encode = (data) => utf8e.encode(data + "\0");

export {
    encode
}