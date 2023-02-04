import fetch from "node-fetch";

export function rndArrayItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

export function getCorrectHttpsUrl(string) {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return null;
    }
    // no http.
    // !url.host.includes("_") IS FOR DISCORD PURPOSES ONLY.
    /*url.protocol === "http:" || */
    if (url.protocol === "https:" || !url.host.includes("_")) {
        return string
    }
    return null
}

export function checkStringLength(string, max, min = 1) {
    // Primitives are a different kind of type than objects created from within Javascript,
    // therefore the check below will always be false.
    // if (string instanceof String) {
    if (typeof string === "string") {
        if (string.length > min && string.length < max) {
            return string
        }
    }
    return null
}

export async function fetchWithTimeout(resource, options = {timeout: 5000}) {
    const { timeout = 5000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
        ...options,
        redirect: 'follow',
        follow: 3,
        signal: controller.signal
    });
    clearTimeout(id);
    return response;
}