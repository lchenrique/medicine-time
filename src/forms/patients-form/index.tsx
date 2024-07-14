import { Patients } from "@/_fakeData/patients";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SheetFooter } from "@/components/ui/sheet";
import { useDrawer } from "@/contexts/drawer-context";

export interface IPatientsFormProps {
  patient?: Patients
}

const PatientsForm = ({ patient }: IPatientsFormProps) => {
  const { close } = useDrawer()

  const formData = [
    { label: "Name", id: "name", value: patient?.name, className: "col-span-3", type: "text" },
    { label: "Room", id: "room", value: patient?.room, className: "col-span-3", type: "number" },
    { label: "Age", id: "age", value: patient?.age, className: "col-span-3", type: "number", min: 0 },
    { label: "Diagnosis", id: "diagnosis", value: patient?.diagnosis, className: "col-span-3", type: "text" },
    { label: "Allergies", id: "allergies", value: patient?.allergies, className: "col-span-3", type: "text" },
    { label: "Patient Status", id: "patientStatus", value: patient?.state, className: "col-span-3", type: "text" }
  ];

  return (
    <ScrollArea className="h-[calc(100%-100px)] w-full rounded-md ">

      <div className="grid gap-4 px-2" >
        {formData.map(({ id, label, value, type, min }) => {
          return <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor={id} >
              {label}
            </Label>
            <Input type={type} min={min} id={id} defaultValue={value} className="col-span-3" />
          </div>
        })}
      </div>
      <SheetFooter >
        <Button onClick={close} >
          Save changes
        </Button>
      </SheetFooter>
    </ScrollArea>

  );
};

export { PatientsForm };