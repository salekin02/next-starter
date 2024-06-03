import FormContent from "@/components/elements/FormContent";
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

const Form = ({...props}) => {

    return (
        <div>
            <h1>Form</h1>

            <Sheet {...props}>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when youre done.
                        </SheetDescription>
                    </SheetHeader>
                    <FormContent />
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>


        </div>
    );
}

export default Form;