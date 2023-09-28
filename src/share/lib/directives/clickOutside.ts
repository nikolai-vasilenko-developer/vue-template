import {Directive, nextTick} from "vue";

export const clickOutside: Directive = {
    mounted(el, binding)
    {
        el.clickOutsideEvent = function (event) {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event, el);
            }
        };

        nextTick(() => {
            document.body.addEventListener('click', el.clickOutsideEvent);
        });
    },
    unmounted(el)
    {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    },
};


