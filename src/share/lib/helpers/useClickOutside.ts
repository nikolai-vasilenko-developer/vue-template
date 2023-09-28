import {nextTick, onMounted, onUnmounted, Ref} from "vue";

export const useClickOutside = (
    closeContainer: Ref<Element | null>,
    accessContainer: Ref<Element | null>,
    fn: () => void,
    autoAdd = false,
    autoRemove = false,
) => {
    const closeContainerClick = (e: Event) => {
        if (!accessContainer.value) return;
        const target = e.target as HTMLElement;
        if (!(
            accessContainer.value === target
            ||
            accessContainer.value?.contains(target)
            ||
            target.compareDocumentPosition(accessContainer.value) >= 32
        ) ) {
            console.log('Срабатывание', target, accessContainer.value, accessContainer.value?.contains(target));
            fn();
        }
    };
    const addEvent = () => {
        closeContainer.value?.addEventListener('click', closeContainerClick);
    };

    const removeEvent = () => {
        closeContainer.value?.removeEventListener('click', closeContainerClick);
    };

    if (autoAdd) {
        onMounted(() => {
            nextTick(() => {
                addEvent();
            });
        });
    }

    if (autoRemove) {
        onUnmounted(() => {
            removeEvent();
        });
    }


    return {
        addEvent,
        removeEvent,
    };
};
