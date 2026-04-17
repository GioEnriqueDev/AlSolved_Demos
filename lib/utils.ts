import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = isProd ? '/AlSolved_Demos' : '';

    // If path is already absolute (starts with http or https), return as is
    if (path.startsWith('http')) return path;

    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    return `${basePath}${normalizedPath}`;
}
