import { DIALOG_TEXTS } from "@/types/dialogText";
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";

export default function CustomDialog({ textType, setOpen }: { textType: string, setOpen: any }) {

    return (
        <Dialog.Root size="xs" placement="center" open={true}
            onOpenChange={(e) => setOpen(e.open)}>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>{DIALOG_TEXTS[textType]}</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">OK</Button>
                            </Dialog.ActionTrigger>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}