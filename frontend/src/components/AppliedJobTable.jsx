import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

const AppliedJobTable = () => {
    // const {allAppliedJobs} = useSelector(store=>store.job);
    return (
        <div>
            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        // allAppliedJobs.length <= 0 ? <span>You haven't applied any job yet.</span> : allAppliedJobs.map((appliedJob) => (
                          [1,2,3,4].map((item,index)=>(
                            <TableRow key={index}>
                                <TableCell>18-20-34</TableCell>
                                <TableCell>Backend Developer</TableCell>
                                <TableCell>Google</TableCell>
                                <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>  
            </Table>
        </div>
    )
}

export default AppliedJobTable