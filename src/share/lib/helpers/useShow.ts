import { ref } from 'vue';

export const useShow = (isStartShow: boolean = false) => {
    const isShow = ref(isStartShow);

    const show = () => {
        isShow.value = true;
    };

    const hide = () => {
        isShow.value = false;
    };

    const toggle = () => {
        isShow.value = !isShow.value;
    };

    return {
        isShow,
        show,
        hide,
        toggle,
    };
};
