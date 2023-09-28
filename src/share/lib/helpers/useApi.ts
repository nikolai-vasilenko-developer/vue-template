import {ref} from 'vue';

export const useApi = <Args>(fn: (...args: Args[]) => Promise<void>, staticError?: string) => {
    const isLoading = ref(false);
    const error = ref('');
    const fetch = async (...args: Args[]) => {
        try {
            isLoading.value = true;
            await fn(...args);
        } catch (e: any) {
            console.log(e);
            if (staticError) {
                error.value = staticError;
            } else {
                error.value = e?.response?.data?.error || 'Ошибка';
            }
        } finally {
            isLoading.value = false;
        }
    };

    return {
        isLoading,
        fetch,
        error,
    };
};
