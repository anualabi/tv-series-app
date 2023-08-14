export const extractNumberFromPathname = (path: string, keyword: string): number | null => {
    const match = RegExp(new RegExp(`${keyword}\\/(\\d+)`)).exec(path);
    return match ? parseInt(match[1]) : null;
}

export const formatDate = (dateString: string): string => {
    try {
        const date = new Date(dateString);
        const offset = date.getTimezoneOffset();
        date.setMinutes(date.getMinutes() - offset);
        return date.toISOString().split('T')[0];
    } catch (error) {
        console.error("Failed to format date:", error);
        return dateString; // return the original string as a fallback
    }
}