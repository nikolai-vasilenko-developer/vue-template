export const copyToClipboard = async (text: string) => {
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        const inner = document.getElementById('hidden_wrapper');
        if (!inner) return;
        inner.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
        } catch (e) {
            // console.log('Unable to copy clipboard');
        }
        inner.removeChild(textarea);
    }
};
