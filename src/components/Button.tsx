import { defineComponent } from "vue";
import styles from "./Button.module.scss";

export const Button = defineComponent({
  setup(props, ctx) {
    return () => (
      <button class={styles.base}>
        {ctx.slots.default && ctx.slots.default()}
      </button>
    );
  },
});
