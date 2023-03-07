import create from "zustand"

export const useModalStore = create((set) => ({
    toggleModal: "none",
    modelPayload: null,
    setToggleModal: (toggleVal) =>
        set(() => ({ toggleModal: toggleVal, modelPayload: null })),
    setModalPayload: (modelPayload) =>
        set(() => ({ toggleModal: "block", modelPayload: modelPayload })),
}))
