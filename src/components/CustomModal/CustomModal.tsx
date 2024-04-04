import { SubjectManager } from '@/models';
import Dialog from '@mui/material/Dialog';
import { useEffect, useState } from 'react';
import { Subscription } from 'rxjs';
export type CustomModalProps = {
	children: React.ReactNode; // Define las propiedades que esperas recibir en el componente
}

export const dialogOpenSubject$ = new SubjectManager<boolean>();
export const dialogCloseSubject$ = new SubjectManager<boolean>();

const CustomModal: React.FC<CustomModalProps>  = ({children}) => {
	const [open, setOpen] = useState(false);
	let openSubject$ = new Subscription();
	let closeSubject$ = new Subscription();
  
	useEffect(() => {
	  openSubject$ = dialogOpenSubject$.getSubject.subscribe(() => handleClickOpen());
	  closeSubject$ = dialogCloseSubject$.getSubject.subscribe(() => handleClose());
	  return () => {
		openSubject$.unsubscribe();
		closeSubject$.unsubscribe();
	  };
	}, []);
  
	const handleClickOpen = () => {
	  setOpen(true);
	};
  
	const handleClose = () => {
	  setOpen(false);
	};
  
	const handleExit = () => {
	  dialogCloseSubject$.setSubject = false;
	};
  
	return (
	  <div>
		<Dialog
		  open={open}
		  onClose={() => handleExit()}
		  aria-labelledby="alert-dialog-title"
		  aria-describedby="alert-dialog-description"
		  fullWidth
		>
		  {children}
		</Dialog>
	  </div>
	);
};

export default CustomModal;
