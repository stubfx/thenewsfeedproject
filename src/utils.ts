import fetch from "node-fetch";

export function rndArrayItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
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