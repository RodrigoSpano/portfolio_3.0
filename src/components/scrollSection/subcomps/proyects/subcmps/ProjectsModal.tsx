import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Table, TableHeader, TableColumn, TableRow, TableBody, TableCell} from "@nextui-org/react";
import {proyectsDB} from '../../../../../utils/db'
import { dbProyects } from "../../../../../utils/interfaces";
import { useLangStore } from "../../../../../zustand/languageStore";
import { FiArrowUpRight } from "react-icons/fi";
import { useThemeStore } from "../../../../../zustand/themeStore";

export default function ProjectModal({title}: {title:string}) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {language} = useLangStore()
  const {dark} = useThemeStore()

  const handleOpen = () => {
    onOpen();
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
          <Button color={dark ? 'warning' : 'warning'} variant="faded" onPress={() => handleOpen()}>{title}</Button>
      </div>
      <Modal
        size={'xl'} 
        isOpen={isOpen} 
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{ language === 'en' ? 'All my Apps' : 'Todos mis applicaciones'}</ModalHeader>
              <ModalBody>
               
              <Table aria-label="Example static collection table">
                <TableHeader className="font-medium">
                  <TableColumn>{ language === 'en' ? 'NAME' : 'Nombre' }</TableColumn>
                  <TableColumn>{ language === 'en' ? 'Repository' : 'Repositorio' }</TableColumn>
                  <TableColumn>{ language === 'en' ? 'Deployment' : 'Despliegue' }</TableColumn>
                </TableHeader>
                <TableBody>
                  {
                    proyectsDB.map((el: dbProyects, i: number) => (
                      <TableRow key={i}>
                        <TableCell>{ language === 'en' ? el.title : (el.titulo ? el.titulo : el.title) }</TableCell>
                        <TableCell><a className="flex gap-1 items-center text-sky-500 font-medium" href={el.repo} target="_blank">{language === 'en' ? 'Repository' : ' Repositorio'} <FiArrowUpRight /> </a> </TableCell>
                        <TableCell>{el.deploy ? <a className="flex gap-1 items-center text-sky-500 font-medium" href={el.deploy} target="_blank"> {language === 'en' ? 'Deploy' : 'Despliegue'} <FiArrowUpRight /> </a> : 
                        <span className="text-medium text-red-400">{language === 'en' ? 'Unavailable' : 'No disponible'}</span>
                        }</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

