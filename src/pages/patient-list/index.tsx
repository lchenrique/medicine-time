/* eslint-disable @typescript-eslint/no-explicit-any */
import "@/styles/global.css";

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { CircleFadingPlus, Cross, EllipsisVertical, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PageHeader } from "@/components/page-header";
import { DataColumn, DataTable } from "@/components/data-table";
import { useDrawer } from "@/contexts/drawer-context";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import { patients, Patients } from "@/_fakeData/patients";
import { useEffect, useState } from "react";
import { getData } from "@/_fakeApi/get-data";
import { PatientsForm } from "@/forms/patients-form";
import { Card } from "@/components/general/card";
import { Container } from "@/layout/container";






function PatientList() {
	const [data, setData] = useState<Patients[] | null>(null)
	const [loading, setLoading] = useState(true)
	const { open } = useDrawer()

	useEffect(() => {
		getPatients()
		return () => {
		}
	}, [])

	const getPatients = async () => {
		setLoading(true)
		const res = await getData(patients)
		setData(res)
		setLoading(false)
	}

	const handlePatient = (patient?: Patients) => {
		open(patient ? "Edit patient" : "New patient", <PatientsForm patient={patient} />)
	}

	const columns: DataColumn<Patients>[] = [
		{ key: 'name', label: 'Name' },
		{ key: 'room', label: 'Room' },
		{ key: 'age', label: 'Age' },
		{ key: 'diagnosis', label: 'Diagnosis' },
		{ key: 'allergies', label: 'Allergies' },
		{
			key: 'state', label: 'Patient Status', render: (p) => {
				const states = {
					["Recovering"]: "secondary",
					["Critical"]: "destructive",
					["Stable"]: "default",
				} as any

				return <Badge variant={states[p.state]}>{p.state}</Badge>
			}
		},
		{
			key: 'action', label: <div className="flex items-center gap-2"><Cross className="size-4 text-primary dark:text-primary-foreground" /> Responsible Nurse</div>, render: (p) => {
				return <div className="flex items-center gap-2 cursor-pointer group">
					<Avatar className="size-8">
						<AvatarImage src={`https://avatar.iran.liara.run/public/girl?username=${p.name}`} alt="@shadcn" />
						<AvatarFallback>DL</AvatarFallback>
					</Avatar>
					<span className="group-hover:text-primary dark:group-hover:text-primary-foreground " > {p.responsibleNurse}</span>
				</div>
			},

		},
		{
			key: 'responsibleNurse', label: "", render: (patient) => {
				return <DropdownMenu >
					<DropdownMenuTrigger asChild>
						<Button variant='ghost' size="sm" className="hover:bg-transparent p-1 ">
							<EllipsisVertical className="size-4" />
						</Button></DropdownMenuTrigger>
					<DropdownMenuContent >
						<DropdownMenuArrow className="fill-border " />
						<DropdownMenuLabel>Options</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View patient</DropdownMenuItem>
						<DropdownMenuItem onClick={() => handlePatient(patient)}>Edit</DropdownMenuItem>
						<DropdownMenuItem>remove</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			},
			fixed: "right",
			className: "px-2 py-0 align-middle text-center"
		}
	]

	return (
		<Container>
				<PageHeader
					breadcrumbs={[{ name: "Patients", path: "/patients" }]}
					extra={
						<Button
							onClick={() => handlePatient()}
							size="sm"
							className="gap-2">
							<CircleFadingPlus className="size-4" />
							New
						</Button>} />


				<Card
					title="Patient List"
					description="Track and Manage Healthcare Care"
					extra={<>
						<Button onClick={getPatients} variant="ghost" size="sm" className="ml-auto"  >
							<RefreshCw className="size-4 text-foreground/50" />
						</Button>
					</>} >
					<DataTable loading={loading} columns={columns} data={data} />
				</Card>
		</Container>
	)
}

export default PatientList
