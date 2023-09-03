import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import ContactForm from "./ContactForm";
import { useLangStore } from "../../../zustand/languageStore";
import { SlEnvolopeLetter } from "react-icons/sl";
import { useThemeStore } from "../../../zustand/themeStore";

export default function ContactModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {language} = useLangStore()
  const {dark} = useThemeStore()

  return (
    <>
      <Button onPress={onOpen} color={dark ? 'secondary' : 'primary'} variant='shadow' className='' endContent={<SlEnvolopeLetter/>}>
      {language === 'en' ? 'Contact me' : 'Contactame'}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{language === 'en' ? 'Contact form' : 'Formulario de contacto'}</ModalHeader>
              <ModalBody>
                <ContactForm />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {language === 'en' ? 'Close' : 'Cerrar'}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
