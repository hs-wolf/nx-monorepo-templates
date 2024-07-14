import { ALERTS_STORE_ID } from "~/utils/constants";

interface IState {
  key: string;
}

export const useAlertStore = defineStore(ALERTS_STORE_ID, {
  state: (): IState => ({ key: "value" }),
  getters: {},
  actions: {
    handleError(error: unknown) {
      console.error("🛑 ERROR:", error);
    },
    handleWarning(error: unknown) {
      console.log("⚠️ WARNING:", error);
    },
  },
});
