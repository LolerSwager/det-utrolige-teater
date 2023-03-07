import { ModalStyled } from "./Modal.Styled"
import { useModalStore } from "./useModalStore"

const Modal = () => {
    const { toggleModal, setToggleModal, modelPayload } = useModalStore()
    return(
        <ModalStyled showmodal={toggleModal}>
            <main>
                <span className="close" onClick={()=> setToggleModal("none")}>
                    &times;
                </span>
                {modelPayload}
            </main>
        </ModalStyled>
    )
}
export default Modal