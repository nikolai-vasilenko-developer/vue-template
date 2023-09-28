import { computed, type Ref, ref } from 'vue';

export const useSelect = <T, U extends keyof T>(items: Ref<T[]>, key: U) => {
    const selectedItemsKeys = ref<Array<T[U]>>([]) as Ref<Array<T[U]>>;
    const lastSelectedItem = ref<{ item: T[U]; status: boolean } | null>(null) as Ref<{ item: T[U]; status: boolean }>;

    const clear = () => {
        selectedItemsKeys.value = [];
    };
    const select = (item: T) => {
        if (selectedItemsKeys.value.includes(item[key])) {
            selectedItemsKeys.value = selectedItemsKeys.value.filter(i => i !== item[key]);
            lastSelectedItem.value = { item: item[key], status: false };
        } else {
            selectedItemsKeys.value.push(item[key]);
            lastSelectedItem.value = { item: item[key], status: true };
        }
    };

    const selectMany = (item: T) => {
        selectManyWithOtherItems(items, item);
    };

    const selectManyWithOtherItems = (items: Ref<T[]>, item: T) => {
        if (!lastSelectedItem.value) {
            select(item);
            return;
        }

        let indexStart = items.value.findIndex(i => i[key] === lastSelectedItem.value.item);
        let indexEnd = items.value.findIndex(i => i[key] === item[key]);

        if (indexStart === -1) {
            select(item);
            return;
        }

        if (indexStart > indexEnd) {
            const temporary = indexStart;
            indexStart = indexEnd;
            indexEnd = temporary;
        }

        const arr: Array<T[U]> = [];

        for (let i = indexStart; i <= indexEnd; i++) {
            arr.push(items.value[i][key]);
        }

        if (lastSelectedItem.value.status) {
            selectedItemsKeys.value.push(...arr.filter(i => !selectedItemsKeys.value.includes(i)));
        } else {
            selectedItemsKeys.value = selectedItemsKeys.value.filter(i => !arr.includes(i));
        }
    };

    const selectedItems = computed(() => {
        return items.value.filter(i => selectedItemsKeys.value.includes(i[key]));
    });

    const hasSelected = computed(() => {
        return !(selectedItemsKeys.value.length === 0);
    });

    return {
        selectedItems,
        selectedItemsKeys,
        hasSelected,
        selectMany,
        select,
        selectManyWithOtherItems,
        clear,
    };
};
