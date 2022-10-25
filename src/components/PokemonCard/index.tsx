import * as React from "react"
import Card from "@mui/material/Card"
import {PokemonCardStyles} from "./styles"
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Box, Button, CardActionArea, DialogActions, DialogContent} from "@mui/material";
import axios from "axios"
import {styled} from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import {useState} from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}))

export interface DialogTitleProps {
    id: string
    children?: React.ReactNode
    onClose: () => void
}

function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    {/*<CloseIcon />*/}
                </IconButton>
            ) : null}
        </DialogTitle>
    )
}



type pokeType = {
    slot: number
    type: {
        name: string
        url: string
    }
}

type PokeCardProps = {
    id: number
    name: string
    image: string
    types: pokeType[]
}

export default function PokemonCard({name, image, types, id}: PokeCardProps){
    const [ open, setOpen ] = useState(false)
    const [ pokeData, setPokeData ] = useState<any>(undefined)

    const typeHandler = () => {
        if (types[1]) {
            return types[0].type.name + " | " + types[1].type.name
        }
        return types[0].type.name
    }

    const openDialog = (id: any) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(r => {
                setOpen(true)
                setPokeData(r)
        }
        )
    }

    return (
        <PokemonCardStyles>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={() => {openDialog(id)}}>
                    <CardMedia component="img" height="200" image={image} alt="green iguana" />
                    <CardContent>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography gutterBottom variant="caption" component="div">
                                {typeHandler()}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>

            {
                pokeData !== undefined
                ?
                    <>
                        <BootstrapDialog
                            onClose={()=>{setOpen(false)}}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                        >
                            <BootstrapDialogTitle id="customized-dialog-title" onClose={()=>{setOpen(false)}}>
                                {pokeData.data.name}
                            </BootstrapDialogTitle>
                            <DialogContent dividers>
                                {JSON.stringify(pokeData)}
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={() => {setOpen(false)}}>
                                    Save changes
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>
                    </>
                :
                    <>
                    </>

            }



        </PokemonCardStyles>
    );
}