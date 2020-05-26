import React, {useState} from 'react'
import { Dialog, DialogContent, DialogTitle, Slide, FormGroup, TextField, Button } from '@material-ui/core'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div>
      <Dialog open={props.open} TransitionComponent={Transition} keepMounted onClose={props.closeModal} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
        <DialogTitle id="alert-dialog-slide-title">Novo Card</DialogTitle>
        <DialogContent>
            <FormGroup style={{padding: 10}}>
                <TextField 
                    label="Título" 
                    variant="filled" 
                    value={title} 
                    onChange={(evt)=>setTitle(evt.target.value)}
                />
                <TextField 
                    style={{marginTop: 10}} 
                    label="Descrição" 
                    variant="filled" 
                    value={description}
                    onChange={(evt)=>setDescription(evt.target.value)}
                />
                <Button 
                    onClick={()=>{
                        var obj = {title, description}
                        setTitle('')
                        setDescription('')
                        props.saveModal(obj)
                    }} 
                    color="primary" 
                    style={{marginTop: 10, marginBottom: 10}}  
                    variant="contained">
                    
                    Adicionar
                
                </Button>
            </FormGroup>
        </DialogContent>
      </Dialog>
    </div>
  );
}