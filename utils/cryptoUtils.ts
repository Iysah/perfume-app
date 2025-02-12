import { AES, enc, mode, pad } from 'crypto-js';

export const encryptData = (data: any, key: string, iv: string) => {
    const encrypted = AES.encrypt(JSON.stringify(data), enc.Utf8.parse(key), {
        iv: enc.Utf8.parse(iv),
        mode: mode.CBC, // AES CBC mode
        padding: pad.Pkcs7, // PKCS7 padding
    });
    return encrypted.toString();
};

export const decryptData = (encryptedData: string, key: string, iv: string) => {
    const decrypted = AES.decrypt(encryptedData, enc.Utf8.parse(key), {
        iv: enc.Utf8.parse(iv),
        mode: mode.CBC, // AES CBC mode
        padding: pad.Pkcs7, // PKCS7 padding
    });
    return JSON.parse(decrypted.toString(enc.Utf8));
};
